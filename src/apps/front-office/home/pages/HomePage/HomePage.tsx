import { Box, Button, Flex, Input } from "@mantine/core";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import { getNamespacesList } from "apps/front-office/namespaces/services/namespaces-service";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  const [namespacesList, setNamespacesList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useOnce(() => {
    getNamespacesList()
      .then(response => {
        setNamespacesList(response.data.namespaces);
        setIsLoading(false);
      })
      .catch(() => {
        // TODO: Handle error
      });
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <Input name="search" placeholder="Search for keywords..." />
      <Flex justify="space-between">
        {namespacesList.map(namespace => (
          <Box mb="sm" key={namespace.name}>
            <Button
              variant="light"
              size="sm"
              component={Link}
              to={URLS.namespaces.viewNamespace(namespace)}>
              {namespace.title}

              <span>({namespace.categories.length})</span>
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
}
