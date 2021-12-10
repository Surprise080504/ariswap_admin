//importing layouts....
import Admin from 'layouts/Admin';
import UnAuth from 'layouts/Auth';

import Dashboard from "views/Dashboard.js";
import Login from "./views/Login/Login";
import Roles from "./views/Roles/Roles";
import Categories from "./views/Categories/Categories";
import Users from "./views/Users/Users"
import Collections from "./views/Collection/Collections"
import SiteSettings from "views/Settings/SiteSettings";
import SocialSettings from "views/Settings/SocialSettings";
import NftsSettings from "views/Settings/NftsSettings";
import MetaKeyDesc from "views/Settings/MetaKeyDesc";
import ManageAdminUsers from "views/ManageAdminUsers/ManageAdminUsers";
import ManageInvestors from "views/ManageInvestors/ManageInvestors";
import ManageMusicians from "views/ManageMusicians/ManageMusicians";
import NFT from "views/NFT/NFT";
import AuctionNFT from "views/NFT/AuctionNFT";
import ReportAbuse from "views/ProductsReport/ReportAbuse";
import ReportItem from "views/ProductsReport/ReportItem";
import Orders from "views/Orders/Orders";
import Transactions from "views/Transactions/Transactions";
import BiddingHistory from "views/BiddingHistory/BiddingHistory";
import Ads from "views/Ads/Ads"
import Reviews from "views/Reviews/Reviews"
import CmsPages from "views/CmsPages/CmsPages";
import Faq from "views/Faq/Faq";
import AddFaq from "views/Faq/AddFaq"
import EditFaq from 'views/Faq/EditFaq';
import BlogCategories from "views/Blogs/BlogCategories";
import Blogs from "views/Blogs/Blogs";
import Languages from "views/Languages/Languages";
import VideoGuides from "views/VideoGuides/VideoGuides";
import Banners from "views/Banners/Banners";
import ContactUsLogs from "views/ContactUsLogs/ContactUsLogs";
import AdminLogs from "views/AdminLogs/AdminLogs";
import EmailTemplates from "views/EmailTemplates/EmailTemplates";
import Profile from 'views/Profile/profile'
import Unauth from 'layouts/Auth';
import Nfts from 'views/Nfts/Nfts';
import LiveAuctions from 'views/LiveAuctions/LiveAuctions';
import Collection from 'views/Collection/Collection';
import EmailTemplate from 'views/EmailTemplates/EmailTemplate';
import ForgotPassword from 'views/ForgotPassword/ForgotPassword';
import ResetPassword from 'views/ResetPassword/ResetPassword';
import Contacts from 'views/Contacts/Contacts';

var routes = [
  {
    path: "/",
    layout: Unauth,
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    access: true,
    exact: true,
    component: Login
  },
  {
    path: "/dashboard",
    layout: Admin,
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    access: true,
    exact: true,
    component: Dashboard,
    showInSideBar: true
  },
  {
    path: "/profile",
    layout: Admin,
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    access: true, exact: true,
    component: Profile,
    showInSideBar: false,
  },
  // {
  //   path: "/staff",
  //   layout: Admin,
  //   name: "Manage Admin Users",
  //   icon: "nc-icon nc-circle-09",
  //   access: true, exact: true,
  //   component: ManageAdminUsers,
  //   showInSideBar: true,
  // },
  {
    path: "/users",
    layout: Admin,
    name: "Users",
    icon: "nc-icon nc-single-02",
    access: true, exact: true,
    component: Users,
    showInSideBar: true,
  },
  // {
  //   path: "/roles",
  //   layout: Admin,
  //   name: "Roles & Permissions",
  //   icon: "nc-icon nc-single-02",
  //   access: true, exact: true,
  //   component: Roles,
  //   showInSideBar: true,
  // },
  {
    path: "/categories",
    layout: Admin,
    name: "Categories",
    icon: "nc-icon nc-bullet-list-67",
    access: true, exact: true,
    component: Categories,
    showInSideBar: true
  },
  {
    path: "/collections",
    layout: Admin,
    name: "Collections",
    icon: "nc-icon nc-cart-simple",
    access: true, exact: true,
    component: Collections,
    showInSideBar: true,
  },
  {
    path: "/collection/:collectionId",
    layout: Admin,
    name: "Collection",
    icon: "nc-icon nc-cart-simple",
    access: true, exact: true,
    component: Collection,
  },
  {
    path: "/nfts",
    layout: Admin,
    name: "NFTs",
    icon: "nc-icon nc-grid-45",
    access: true, exact: true,
    component: Nfts,
    showInSideBar: true,
  },
  {
    path: "/live-auctions",
    layout: Admin,
    name: "Live Auctions",
    icon: "nc-icon nc-money-coins",
    access: true, exact: true,
    component: LiveAuctions,
    showInSideBar: true,
  },
  {
    path: "/email-templates",
    layout: Admin,
    name: "Email Templates",
    icon: "nc-icon nc-email-83",
    access: true, exact: true,
    component: EmailTemplates,
    showInSideBar: true,
  },
  {
    path: "/email-template/:emailId",
    layout: Admin,
    name: "Email Template",
    icon: "nc-icon nc-cart-simple",
    access: true, exact: true,
    component: EmailTemplate,
  },
  {
    path: "/faq",
    layout: Admin,
    name: "FAQ",
    icon: "nc-icon nc-bulb-63",
    access: true, exact: true,
    component: Faq,
    showInSideBar: true,
  },
  {
    path: "/add-faq",
    layout: Admin,
    name: "Add Faq",
    icon: "nc-icon nc-bulb-63",
    access: true, exact: true,
    component: AddFaq,
  },
  {
    path: "/edit-faq/:faqId",
    layout: Admin,
    name: "Add Faq",
    icon: "nc-icon nc-bulb-63",
    access: true, exact: true,
    component: EditFaq,
  },
  {
    path: "/contact",
    layout: Admin,
    name: "Contacts",
    icon: "nc-icon nc-send",
    access: true, exact: true,
    component: Contacts,
    showInSideBar: true,
  },
  // {
  //   path: "/manage-investors",
  //   layout: Admin,
  //   name: "Manage Investors",
  //   icon: "nc-icon nc-bank",
  // access: true, exact: true, //   
  // component: ManageInvestors,
  // },
  // {
  //   path: "/manage-musicians",
  //   layout: Admin,
  //   name: "Manage Musicians",
  //   icon: "nc-icon nc-note-03",
  // access: true, exact: true, //   
  // component: ManageMusicians,
  // },
  // {
  //   collapse: true,
  //   name: "NFTs",
  //   state: "openProducts",
  //   icon: "nc-icon nc-grid-45",
  //   showInSideBar: true,
  //   submenus: [
  //     {
  //       path: "/nfts",
  //       layout: Admin,
  //       name: "NFTs",
  //       mini: "N",
  //       access: true, exact: true,
  //       component: NFT,
  //       showInSideBar: true,
  //     },
  //     {
  //       path: "/auctions",
  //       layout: Admin,
  //       name: "NFTs Auctions",
  //       mini: "A",
  //       access: true, exact: true,
  //       component: AuctionNFT,
  //       showInSideBar: true,
  //     }
  //   ],
  // },
  // {
  //   path: "/collections",
  //   layout: Admin,
  //   name: "Collections",
  //   icon: "nc-icon nc-cart-simple",
  //   access: true, exact: true,
  //   component: Collections
  // },
  // {
  //   collapse: true,
  //   path: "/products",
  //   name: "Products Report",
  //   state: "productReportAbuses",
  //   icon: "nc-icon nc-attach-87",
  //   views: [
  //     {
  //       path: "/report-abuse",
  //       layout: Admin,
  //       name: "Report Abuse",
  //       mini: "RA",
  // access: true, exact: true, //       
  // component: ReportAbuse,
  //     },
  //     {
  //       path: "/report-item",
  //       layout: Admin,
  //       name: "Report Item",
  //       mini: "RI",
  // access: true, exact: true, //       
  // component: ReportItem,
  //     }
  //   ],
  // },
  // {
  //   path: "/orders",
  //   layout: Admin,
  //   name: "Orders",
  //   icon: "nc-icon nc-delivery-fast",
  // access: true, exact: true, //   
  // component: Orders,
  // },
  // {
  //   path: "/transactions",
  //   layout: Admin,
  //   name: "Transactions",
  //   icon: "nc-icon nc-money-coins",
  // access: true, exact: true, //   
  // component: Transactions,
  // },
  // {
  //   path: "/bidding-history",
  //   layout: Admin,
  //   name: "Bidding History",
  //   icon: "nc-icon nc-bold",
  //   access: true, exact: true,
  //   component: BiddingHistory,
  //   showInSideBar: true,
  // },
  // {
  //   path: "/ads",
  //   layout: Admin,
  //   name: "Ads",
  //   icon: "nc-icon nc-explore-2",
  // access: true, exact: true, //   
  // component: Ads,
  // },
  // {
  //   path: "/reviews",
  //   layout: Admin,
  //   name: "Reviews",
  //   icon: "nc-icon nc-atom",
  // access: true, exact: true, //   
  // component: Reviews,
  // },
  // {
  //   path: "/cms-pages",
  //   layout: Admin,
  //   name: "CMS Pages",
  //   icon: "nc-icon nc-single-copy-04",
  // access: true, exact: true, //   
  // component: CmsPages,
  // },
  // {
  //   collapse: true,
  //   path: "/faq",
  //   name: "Faq",
  //   state: "openFaq",
  //   icon: "nc-icon nc-bulb-63",
  //   views: [
  //     {
  //       path: "/faq-categories",
  //       layout: Admin,
  //       name: "FAQ Categories",
  //       mini: "FC",
  // access: true, exact: true, //       
  // component: FaqCategories,
  //     },
  //     {
  //       path: "/faq",
  //       layout: Admin,
  //       name: "FAQs",
  //       mini: "F",
  // access: true, exact: true, //       
  // component: Faq,
  //     }
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/blogs",
  //   name: "Blogs",
  //   state: "openBlogs",
  //   icon: "nc-icon nc-paper-2",
  //   views: [
  //     {
  //       path: "/blog-categories",
  //       layout: Admin,
  //       name: "Blog Categories",
  //   mini: "BC",
  // access: true, exact: true, //       
  // component: BlogCategories,
  //     },
  //     {
  //       path: "/blogs",
  //       layout: Admin,
  //       name: "Blogs",
  //       mini: "B",
  // access: true, exact: true, //       
  // component: Blogs,
  //     }
  //   ],
  // },
  // {
  //   path: "/languages",
  //   layout: Admin,
  //   name: "Languages",
  //   icon: "nc-icon nc-notification-70",
  // access: true, exact: true, //   
  // component: Languages,
  // },
  // {
  //   path: "/video-guides",
  //   layout: Admin,
  //   name: "Video Guides",
  //   icon: "nc-icon nc-button-play",
  // access: true, exact: true, //   
  // component: VideoGuides,
  // },
  // {
  //   path: "/banners",
  //   layout: Admin,
  //   name: "Banners",
  //   icon: "nc-icon nc-badge",
  // access: true, exact: true, //   
  // component: Banners,
  // },
  // {
  //   path: "/contact-us-logs",
  //   layout: Admin,
  //   name: "Contact Us Logs",
  //   icon: "nc-icon nc-tablet-2",
  //   access: true, exact: true,
  //   component: ContactUsLogs,
  //   showInSideBar: true,
  // },
  // {
  //   path: "/admin-logs",
  //   layout: Admin,
  //   name: "Admin Logs",
  //   icon: "nc-icon nc-notes",
  // access: true, exact: true, //   
  // component: AdminLogs,
  // },
  // {
  //   path: "/email-templates",
  //   layout: Admin,
  //   name: "Email Templates",
  //   icon: "nc-icon nc-email-83",
  //   access: true, exact: true,
  //   component: EmailTemplates,
  //   showInSideBar: true,
  // },
  // {
  //   collapse: true,
  //   path: "/components",
  //   name: "Components",
  //   state: "openComponents",
  //   icon: "nc-icon nc-app",
  //   views: [
  //     {
  //       path: "/buttons",
  //       layout: Admin,
  //       name: "Buttons",
  //       mini: "B",
  // access: true, exact: true, //       
  // component: Buttons,
  //     },
  //     {
  //       path: "/grid-system",
  //       layout: Admin,
  //       name: "Grid System",
  //       mini: "GS",
  // access: true, exact: true, //       
  // component: GridSystem,
  //     },
  //     {
  //       path: "/panels",
  //       layout: Admin,
  //       name: "Panels",
  //       mini: "P",
  // access: true, exact: true, //       
  // component: Panels,
  //     },
  //     {
  //       path: "/sweet-alert",
  //       layout: Admin,
  //       name: "Sweet Alert",
  //       mini: "SA",
  // access: true, exact: true, //       
  // component: SweetAlert,
  //     },
  //     {
  //       path: "/notifications",
  //       layout: Admin,
  //       name: "Notifications",
  //       mini: "N",
  // access: true, exact: true, //       
  // component: Notifications,
  //     },
  //     {
  //       path: "/icons",
  //       layout: Admin,
  //       name: "Icons",
  //       mini: "I",
  // access: true, exact: true, //       
  // component: Icons,
  //     },
  //     {
  //       path: "/typography",
  //       layout: Admin,
  //       name: "Typography",
  //       mini: "T",
  // access: true, exact: true, //       
  // component: Typography,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: "nc-icon nc-notes",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       layout: Admin,
  //       name: "Regular Forms",
  //       mini: "RF",
  // access: true, exact: true, //       
  // component: RegularForms,
  //     },
  //     {
  //       path: "/extended-forms",
  //       layout: Admin,
  //       name: "Extended Forms",
  //       mini: "EF",
  //    access: true, exact: true, //       
  //  component: ExtendedForms,
  //     },
  //     {
  //       path: "/validation-forms",
  //       layout: Admin,
  //       name: "Validation Forms",
  //       mini: "VF",
  //    access: true, exact: true, //       
  //  component: ValidationForms,
  //     },
  //     {
  //       path: "/wizard",
  //       layout: Admin,
  //       name: "Wizard",
  //       mini: "W",
  //    access: true, exact: true, //       
  //  component: Wizard,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: "nc-icon nc-paper-2",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       layout: Admin,
  //       name: "Regular Tables",
  //       mini: "RT",
  //    access: true, exact: true, //       
  //  component: RegularTables,
  //     },
  //     {
  //       path: "/extended-tables",
  //       layout: Admin,
  //       name: "Extended Tables",
  //       mini: "ET",
  //    access: true, exact: true, //       
  //  component: ExtendedTables,
  //     },
  //     {
  //       path: "/react-table",
  //       layout: Admin,
  //       name: "React Table",
  //       mini: "RT",
  //    access: true, exact: true, //       
  //  component: ReactTables,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: "nc-icon nc-pin-3",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       layout: Admin,
  //       name: "Google Maps",
  //       mini: "GM",
  //    access: true, exact: true, //       
  //  component: GoogleMaps,
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       layout: Admin,
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //    access: true, exact: true, //       
  //  component: FullScreenMap,
  //     },
  //     {
  //       path: "/vector-maps",
  //       layout: Admin,
  //       name: "Vector Map",
  //       mini: "VM",
  //    access: true, exact: true, //       
  //  component: VectorMap,
  //     },
  //   ],
  // },
  // {
  //   path: "/charts",
  //   layout: Admin,
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //    access: true, exact: true, //   
  //  component: Charts,
  // },
  // {
  //   path: "/calendar",
  //   layout: Admin,
  //   name: "Calendar",
  //   icon: "nc-icon nc-single-copy-04",
  //    access: true, exact: true, //   
  //  component: Calendar,
  // },
  // {
  //   collapse: true,
  //   path: "/profile",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: "nc-icon nc-puzzle-10",
  //   views: [
  //     {
  //       path: "/user-page",
  //       layout: Admin,
  //       name: "User Page",
  //       mini: "UP",
  //    access: true, exact: true, //       
  //  component: UserPage,
  //     },
  //     {
  //       path: "/login-page",
  //       layout: UnAuth,
  //       name: "Login Page",
  //       mini: "LP",
  //    access: true, exact: true, //       
  //  component: LoginPage,
  //     },
  //     {
  //       path: "/register-page",
  //       layout: UnAuth,
  //       name: "Register",
  //       mini: "RP",
  //    access: true, exact: true, //       
  //  component: RegisterPage,
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       layout: UnAuth,
  //       name: "Lock Screen Page",
  //       mini: "LSP",
  //    access: true, exact: true, //       
  //  component: LockScreenPage,
  //     },
  //   ],
  // },
  {
    collapse: true,
    name: "Settings",
    state: "opensettings",
    icon: "nc-icon nc-settings-gear-64",
    showInSideBar: true,
    submenus: [
      {
        path: "/site-settings",
        layout: Admin,
        name: "Site Settings",
        mini: "SS",
        access: true, exact: true,
        component: SiteSettings,
        showInSideBar: true,
      },
      {
        path: "/social-settings",
        layout: Admin,
        name: "Social Settings",
        mini: "SS",
        access: true, exact: true,
        component: SocialSettings,
        showInSideBar: true,
      },
      {
        path: "/nfts-settings",
        layout: Admin,
        name: "Nfts Settings",
        mini: "NS",
        access: true, exact: true,
        component: NftsSettings,
        showInSideBar: true,
      }
      // {
      //   path: "/meta-keywords-&-desc",
      //   layout: Admin,
      //   name: "Meta Keywords & Desc",
      //   mini: "MKD",
      //   access: true, exact: true,
      //   component: MetaKeyDesc,
      //   showInSideBar: true,
      // },
    ],
  },
  {
    path: "/login",
    layout: UnAuth,
    name: "Login",
    mini: "LP",
    component: Login,
  },
  {
    path: "/forgotpassword",
    layout: UnAuth,
    name: "Forgot Passowrd",
    mini: "FP",
    component: ForgotPassword,
  },
  {
    path: "/reset-password/:adminId",
    layout: UnAuth,
    name: "Reset Passowrd",
    mini: "RP",
    component: ResetPassword,
  },

];

export default routes;
