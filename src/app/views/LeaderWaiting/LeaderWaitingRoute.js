import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import {  withTranslation} from 'react-i18next';
const LeaderWaiting = EgretLoadable({
  loader: () => import("./LeaderWaiting")
});
const ViewComponent = withTranslation()(LeaderWaiting);
const LeaderWaitingRoutes = [
  {
    path: ConstantList.ROOT_PATH + "leader_waiting",
    exact: true,
    component: ViewComponent
  }
];

export default LeaderWaitingRoutes;
