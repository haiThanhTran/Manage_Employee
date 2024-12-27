import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import {  withTranslation} from 'react-i18next';
const ManageEmployee = EgretLoadable({
  loader: () => import("./ManageEmployee")
});
const ViewComponent = withTranslation()(ManageEmployee);
const ManageEmployeeRoutes = [
  {
    path: ConstantList.ROOT_PATH + "manage_employee",
    exact: true,
    component: ViewComponent
  }
];

export default ManageEmployeeRoutes;
