import { SocialList, Item } from "./styled";
import { Link } from "@/i18n/navigation";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Socials() {
  return (
    <SocialList>
      <Item>
        <Link href="https://www.facebook.com/smm.programming.it" target="_blank">
          <FacebookOutlinedIcon />
        </Link>
      </Item>
      <Item>
        <Link href="https://www.instagram.com/accounts/login/?next=%2Fwelcometo_it%2F&source=omni_redirect" target="_blank">
          <InstagramIcon />
        </Link>
      </Item>
    </SocialList>
  );
}