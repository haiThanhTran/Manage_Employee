import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import {  withTranslation} from 'react-i18next';
const EndEmployee = EgretLoadable({
  loader: () => import("./EndEmployee")
});
const ViewComponent = withTranslation()(EndEmployee);
const EndEmployeeRoutes = [
  {
    path: ConstantList.ROOT_PATH + "end_employee",
    exact: true,
    component: ViewComponent
  }
];

export default EndEmployeeRoutes;
