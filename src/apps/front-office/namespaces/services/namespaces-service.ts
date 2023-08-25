import { endpointMockup } from "apps/front-office/utils/endpoint-mockup";
import { namespaces } from "apps/translations/data";

/**
 * Get Namespaces list
 */
export function getNamespacesList() {
  return endpointMockup(namespaces);
}

/**
 * Get namespaces details
 */
export function getNamespace(namespaceName: string) {
  const namespace = namespaces.find(
    namespace => namespace.name === namespaceName,
  );

  return endpointMockup({
    namespace,
  });
}
