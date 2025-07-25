"use client";
import { useTranslations } from "next-intl";
import { imgs } from "./images";
import { useEffect, useState } from "react";
import {
  FeaturesSection,
  FeaturesContainer,
  FeaturesTitle,
  FeaturesList,
  FeaturesItem,
  FeaturesText,
  BeforeTitle,
  FeaturesImg
} from "./styled";


export default function FeaturesItems() {
  const t = useTranslations("FeaturesItems");
  const [featuresItems, setFeaturesItems] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        // Check if data is already cached in sessionStorage
        const cachedData = sessionStorage.getItem("featuresItems");
        if (cachedData) {
          setFeaturesItems(JSON.parse(cachedData));
          return;
        }

        // Fetch data from the API if not cached
        const response = await fetch("/api/featuresItems");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { featuresItems } = await response.json();

        // Cache the data in sessionStorage
        sessionStorage.setItem("featuresItems", JSON.stringify(featuresItems));
        setFeaturesItems(featuresItems);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);


  return (
    <FeaturesSection>
      <FeaturesContainer>
        <FeaturesList>
          {featuresItems.map((post) => (
            <FeaturesItem key={post.id}>
              <div>
                <BeforeTitle>
                  {t(post?.beforeTitle)}
                </BeforeTitle>
                <FeaturesTitle>{t(post?.title)}</FeaturesTitle>
                <FeaturesText>{t(post?.description)}</FeaturesText>
              </div>
              <FeaturesImg src={imgs[post?.id - 1]?.path}
                alt={imgs[post?.id - 1]?.alt}
                width={700}
                height={700}
                style={{ width: '100%', height: 'auto' }}
                onLoad={() => setImageLoading(false)}
                imageLoading={imageLoading}
                priority={false}
              />
            </FeaturesItem>
          ))}
        </FeaturesList>
      </FeaturesContainer>
    </FeaturesSection>
  )
}