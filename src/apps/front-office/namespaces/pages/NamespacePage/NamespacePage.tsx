import { LoadingOverlay, SegmentedControl, Text } from "@mantine/core";
import { useOnce } from "@mongez/react-hooks";
import { GenericObject } from "@mongez/reinforcements";
import { getNamespace } from "apps/front-office/namespaces/services/namespaces-service";
import { Namespace } from "apps/translations/utils/types";
import { useMemo, useState } from "react";

export type NamespacePageProps = {
  params: {
    name: string;
  };
};

const localeCodes = ["all", "en", "ar", "de"];

export default function NamespacePage({ params }: NamespacePageProps) {
  const [namespace, setNamespace] = useState<Namespace | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");

  useOnce(() => {
    getNamespace(params.name)
      .then(response => {
        setNamespace(response.data.namespace);
        setIsLoading(false);
      })
      .catch(() => {
        // TODO: Handle error
      });
  });

  const categories = useMemo(() => {
    if (!namespace) return [];

    for (const category of namespace.categories) {
      // count total keywords in each language
      const translationsCount: GenericObject = {};
      for (const keyword in category.translations) {
        const translation = category.translations[keyword];

        for (const localeCode in translation) {
          if (!translationsCount[localeCode]) {
            translationsCount[localeCode] = 0;
          }

          translationsCount[localeCode]++;
        }
      }

      category.translationsCount = Object.keys(translationsCount).map(
        localeCode => ({
          localeCode,
          count: translationsCount[localeCode],
        }),
      );
    }

    if (activeTab === "all") return namespace.categories;

    return namespace.categories.filter(category => {
      return Boolean(
        category.translationsCount.find(
          translation => translation.localeCode === activeTab,
        ),
      );
    });
  }, [namespace, activeTab]);

  if (isLoading) {
    return <LoadingOverlay visible={isLoading} />;
  }

  return (
    <Text align="center">
      <SegmentedControl
        data={localeCodes}
        value={activeTab}
        onChange={setActiveTab}
      />
      <h1>
        {namespace?.title} ({categories.length})
      </h1>

      <h2>
        {categories.map(category => (
          <li key={category.name}>
            {category.title}
            <ul>
              {category.translationsCount.map(translation => (
                <li key={translation.localeCode}>
                  {translation.localeCode} ({translation.count})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </h2>
    </Text>
  );
}
