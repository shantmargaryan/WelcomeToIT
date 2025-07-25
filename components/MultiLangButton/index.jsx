import { MultiLangBox, LangButton } from "./styled";
import { useRouter, usePathname } from "../../i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Icon } from "@/Utils/Icon";
export default function MultiLangButton() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onChangeLocale(nextLocale) {
    router.replace({ pathname, params }, {
      locale: nextLocale,
      scroll: false,
      shallow: true,
      forceOptimisticNavigation: true,
      pushState: true
    });
  }


  return (
    <MultiLangBox>
      <LangButton onClick={() => onChangeLocale(routing.locales[1])}>
        <Icon icon="Armenia" />
      </LangButton>
      <LangButton onClick={() => onChangeLocale(routing.locales[0])}>
        <Icon icon="USA" />
      </LangButton>
    </MultiLangBox>
  );
}
