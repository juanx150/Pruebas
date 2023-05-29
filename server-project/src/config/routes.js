/*Components > Layouts > Pages > routes*/
import { GeneralLayout } from "../layouts/GeneralLayout";
import { GeneralLayoutHome } from "../layouts/GeneralLayoutHome";
import {Admin} from "../pages/admin/Admin";
import { SignIn } from "../pages/admin/SignIn";
import { Login } from "../pages/General/Login";
import { Home } from "../pages/General/Home";
import { Contact } from "../pages/General/Contact";
import { NotFound } from "../pages/General/NotFound";
import { LayoutLogin } from "../layouts/LayoutLogin";
import { Register } from "../pages/General/Register";
import { LayoutRegister } from "../layouts/LayoutRegister";

const AdminRoutes = [
    {path:"/admin",component:Admin,Layout:GeneralLayout},
    {path:"/admin/sign-in",component:SignIn,Layout:GeneralLayout},
];

const GeneralRoutes = [
    {path:"/home",component:Home,Layout:GeneralLayoutHome},
    {path:"/contact",component:Contact,Layout:GeneralLayout},
    {path:"*",component:NotFound,Layout:GeneralLayout},
    {path:"/LogIn",component:Login,Layout:LayoutLogin},
    {path:"/Register",component:Register,Layout:LayoutRegister},
];

const allRoutesProject = [...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;