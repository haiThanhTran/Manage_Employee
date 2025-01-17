import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const ApprovedEmployee = EgretLoadable({
  loader: () => import("./LeaderApproved"),
});
const ViewComponent = withTranslation()(ApprovedEmployee);
const LeaderApprovedRoutes = [
  {
    path: ConstantList.ROOT_PATH + "leader_approved",
    exact: true,
    component: ViewComponent,
  },
];

export default LeaderApprovedRoutes;
