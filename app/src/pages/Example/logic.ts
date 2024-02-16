import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { useCacheContext } from '../../hooks/useCacheContext';

export const useDashboard = () => {
  const navigate = useNavigate();
  // const { hookCacheContextState } = useCacheContext();
  // const [searchParams] = useSearchParams();
  // const newStr = searchParams.get('newStr');

  // const [selectStrId, setSelectStrId] = useState<string | undefined>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [newStrToast, setNewStrToast] = useState(false);
  // const [strLimitToast, setStrLimitToast] = useState(false);
  // const [renderError, setRenderError] = useState<boolean>(false);

  // const setSelectStrIdHandler = (id?: string) => setSelectStrId(id);

  // const getStrs = async () => {
  //   setNewStrToast(!!newStr);
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const strApplications = await useFetch({
  //     method: 'GET',
  //     path: `${hookCacheContextState.user.userType === 'admin' ? '/admin/' : '/'}str-applications`,
  //     headers: {
  //       authorization: `Bearer ${hookCacheContextState.tokens.accessToken}`,
  //     },
  //   });

  //   if (strApplications?.status === 200) {
  //     setStrList(strApplications.data || []);
  //     if (strApplications.data.length > 4) setStrLimitToast(true);
  //     const centre = strApplications.data.find((centre: any) => centre.primaryResidence);
  //     setCentrePoint(centre || strApplications.data[0]);
  //   }
  //   setIsLoading(false);
  // };

  // const boundaryPointHandler = async ({ lat, lng, radius }: BoundaryCircleType) => {
  //   try {
  //     await validationBoundaryCircle({ lat, lng, radius });

  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const strApplications = await useFetch({
  //       method: 'GET',
  //       path: `${hookCacheContextState.user.userType === 'admin' ? '/admin/' : '/'}str-applications/circle?centerLat=${lat}&centerLon=${lng}&radius=${radius / 1000}`,
  //       headers: {
  //         authorization: `Bearer ${hookCacheContextState.tokens.accessToken}`,
  //       },
  //     });

  //     if (strApplications?.status === 200) {
  //       setStrList(strApplications.data);
  //     }

  //     setIsLoading(false);
  //   } catch (error) {
  //     setRenderError(true);
  //   }
  // };

  // const clearBoundaryHandler = () => getStrs();

  // useEffect(() => {
  //   getStrs();
  // }, []);

  return {
    navigate,
    // hookCacheContextState,
    // isLoading,
    // renderError,
  };
};
