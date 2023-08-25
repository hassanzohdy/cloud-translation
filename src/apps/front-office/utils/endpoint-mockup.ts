import type { AxiosResponse } from "axios";

export function endpointMockup(data: any): Promise<AxiosResponse<any>> {
  return new Promise(resolve => {
    resolve({
      data,
    } as AxiosResponse<any>);
  });
}
