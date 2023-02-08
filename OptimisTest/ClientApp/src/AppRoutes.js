
import { Home } from "./components/Home";
import StainList from "./components/SatinList/StainList.tsx";
import GroupContainer from "./components/GroupContainer/GroupContainer.tsx";
import GroupDetails from "./components/GroupDetails/GroupDetails.tsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/stain',
        element: <StainList />
    },
    {
        path: '/group',
        element: <GroupContainer />
    },
    {
        path: '/group/:groupId',
        element: <GroupDetails />
    },
];

export default AppRoutes; 
