import Dashboard from "../views/Dashboard.js";
import Categories from "../views/Categories/Categories";
import SiteSettings from "../views/Settings/SiteSettings";
import SocialSettings from "../views/Settings/SocialSettings";
import AdManagerSettings from "../views/Settings/NftsSettings";
import MetaKeyDesc from "../views/Settings/MetaKeyDesc";
import ManageAdminUsers from "../views/ManageAdminUsers/ManageAdminUsers";
import Collection from "../views/OldCollection/Collection";
import ManageInvestors from "../views/ManageInvestors/ManageInvestors";
import Creator from "../views/Creator/Creator";
import ManageMusicians from "../views/ManageMusicians/ManageMusicians";
import NFT from "../views/NFT/NFT";
import AuctionNFT from "../views/NFT/AuctionNFT";
import ReportAbuse from "../views/ProductsReport/ReportAbuse";
import ReportItem from "../views/ProductsReport/ReportItem";
import Orders from "../views/Orders/Orders";
import Transactions from "../views/Transactions/Transactions";
import BiddingHistory from "../views/BiddingHistory/BiddingHistory";
import Ads from "../views/Ads/Ads"
import Reviews from "../views/Reviews/Reviews"
import CmsPages from "../views/CmsPages/CmsPages";
import Faq from "../views/Faq/Faq";
import FaqCategories from "../views/Faq/FaqCategories";
import BlogCategories from "../views/Blogs/BlogCategories";
import Blogs from "../views/Blogs/Blogs";
import Languages from "../views/Languages/Languages";
import VideoGuides from "../views/VideoGuides/VideoGuides";
import Banners from "../views/Banners/Banners";
import ContactUsLogs from "../views/ContactUsLogs/ContactUsLogs";
import AdminLogs from "../views/AdminLogs/AdminLogs";
import EmailTemplates from "../views/EmailTemplates/EmailTemplates";
import Profile from '../views/Profile/profile'

var routes = [
    {
        path: "/dashboard",
        layout: "/admin",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        access: true, exact: true,
        component: Dashboard,
    },
    {
        path: "/profile",
        layout: "/admin",
        name: "Profile",
        icon: "nc-icon nc-circle-09",
        access: true, exact: true,
        component: Profile,
    },

    {
        path: "/categories",
        layout: "/admin",
        name: "Categories",
        icon: "nc-icon nc-bullet-list-67",
        access: true, exact: true,
        component: Categories,
    },
    {
        path: "/staff",
        layout: "/admin",
        name: "Manage Admin Users",
        icon: "nc-icon nc-circle-09",
        access: true, exact: true,
        component: ManageAdminUsers
    },
    {
        path: "/collections",
        layout: "/admin",
        name: "Collections",
        icon: "nc-icon nc-cart-simple",
        access: true, exact: true,
        component: Collection
    },
    // {
    //   path: "/manage-investors",
    //   layout: "/admin",
    //   name: "Manage Investors",
    //   icon: "nc-icon nc-bank",
    // access: true, exact: true, //   
    // component: ManageInvestors,
    // },
    {
        path: "/creators",
        layout: "/admin",
        name: "Creators",
        icon: "nc-icon nc-album-2",
        access: true, exact: true,
        component: Creator,
    },
    // {
    //   path: "/manage-musicians",
    //   layout: "/admin",
    //   name: "Manage Musicians",
    //   icon: "nc-icon nc-note-03",
    // access: true, exact: true, //   
    // component: ManageMusicians,
    // },
    {
        collapse: true,
        path: "/nfts",
        name: "NFTs",
        state: "openProducts",
        icon: "nc-icon nc-grid-45",
        views: [
            {
                path: "/nfts",
                layout: "/admin",
                name: "NFTs",
                mini: "N",
                access: true, exact: true,
                component: NFT,
            },
            {
                path: "/auctions",
                layout: "/admin",
                name: "NFTs Auctions",
                mini: "A",
                access: true, exact: true,
                component: AuctionNFT,
            }
        ],
    },
    // {
    //   collapse: true,
    //   path: "/products",
    //   name: "Products Report",
    //   state: "productReportAbuses",
    //   icon: "nc-icon nc-attach-87",
    //   views: [
    //     {
    //       path: "/report-abuse",
    //       layout: "/admin",
    //       name: "Report Abuse",
    //       mini: "RA",
    // access: true, exact: true, //       
    // component: ReportAbuse,
    //     },
    //     {
    //       path: "/report-item",
    //       layout: "/admin",
    //       name: "Report Item",
    //       mini: "RI",
    // access: true, exact: true, //       
    // component: ReportItem,
    //     }
    //   ],
    // },
    // {
    //   path: "/orders",
    //   layout: "/admin",
    //   name: "Orders",
    //   icon: "nc-icon nc-delivery-fast",
    // access: true, exact: true, //   
    // component: Orders,
    // },
    // {
    //   path: "/transactions",
    //   layout: "/admin",
    //   name: "Transactions",
    //   icon: "nc-icon nc-money-coins",
    // access: true, exact: true, //   
    // component: Transactions,
    // },
    {
        path: "/bidding-history",
        layout: "/admin",
        name: "Bidding History",
        icon: "nc-icon nc-bold",
        access: true, exact: true,
        component: BiddingHistory,
    },
    // {
    //   path: "/ads",
    //   layout: "/admin",
    //   name: "Ads",
    //   icon: "nc-icon nc-explore-2",
    // access: true, exact: true, //   
    // component: Ads,
    // },
    // {
    //   path: "/reviews",
    //   layout: "/admin",
    //   name: "Reviews",
    //   icon: "nc-icon nc-atom",
    // access: true, exact: true, //   
    // component: Reviews,
    // },
    // {
    //   path: "/cms-pages",
    //   layout: "/admin",
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
    //       layout: "/admin",
    //       name: "FAQ Categories",
    //       mini: "FC",
    // access: true, exact: true, //       
    // component: FaqCategories,
    //     },
    //     {
    //       path: "/faq",
    //       layout: "/admin",
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
    //       layout: "/admin",
    //       name: "Blog Categories",
    //   mini: "BC",
    // access: true, exact: true, //       
    // component: BlogCategories,
    //     },
    //     {
    //       path: "/blogs",
    //       layout: "/admin",
    //       name: "Blogs",
    //       mini: "B",
    // access: true, exact: true, //       
    // component: Blogs,
    //     }
    //   ],
    // },
    // {
    //   path: "/languages",
    //   layout: "/admin",
    //   name: "Languages",
    //   icon: "nc-icon nc-notification-70",
    // access: true, exact: true, //   
    // component: Languages,
    // },
    // {
    //   path: "/video-guides",
    //   layout: "/admin",
    //   name: "Video Guides",
    //   icon: "nc-icon nc-button-play",
    // access: true, exact: true, //   
    // component: VideoGuides,
    // },
    // {
    //   path: "/banners",
    //   layout: "/admin",
    //   name: "Banners",
    //   icon: "nc-icon nc-badge",
    // access: true, exact: true, //   
    // component: Banners,
    // },
    {
        path: "/contact-us-logs",
        layout: "/admin",
        name: "Contact Us Logs",
        icon: "nc-icon nc-tablet-2",
        access: true, exact: true,
        component: ContactUsLogs,
    },
    // {
    //   path: "/admin-logs",
    //   layout: "/admin",
    //   name: "Admin Logs",
    //   icon: "nc-icon nc-notes",
    // access: true, exact: true, //   
    // component: AdminLogs,
    // },
    {
        path: "/email-templates",
        layout: "/admin",
        name: "Email Templates",
        icon: "nc-icon nc-email-83",
        access: true, exact: true,
        component: EmailTemplates,
    },
    // {
    //   collapse: true,
    //   path: "/components",
    //   name: "Components",
    //   state: "openComponents",
    //   icon: "nc-icon nc-app",
    //   views: [
    //     {
    //       path: "/buttons",
    //       layout: "/admin",
    //       name: "Buttons",
    //       mini: "B",
    // access: true, exact: true, //       
    // component: Buttons,
    //     },
    //     {
    //       path: "/grid-system",
    //       layout: "/admin",
    //       name: "Grid System",
    //       mini: "GS",
    // access: true, exact: true, //       
    // component: GridSystem,
    //     },
    //     {
    //       path: "/panels",
    //       layout: "/admin",
    //       name: "Panels",
    //       mini: "P",
    // access: true, exact: true, //       
    // component: Panels,
    //     },
    //     {
    //       path: "/sweet-alert",
    //       layout: "/admin",
    //       name: "Sweet Alert",
    //       mini: "SA",
    // access: true, exact: true, //       
    // component: SweetAlert,
    //     },
    //     {
    //       path: "/notifications",
    //       layout: "/admin",
    //       name: "Notifications",
    //       mini: "N",
    // access: true, exact: true, //       
    // component: Notifications,
    //     },
    //     {
    //       path: "/icons",
    //       layout: "/admin",
    //       name: "Icons",
    //       mini: "I",
    // access: true, exact: true, //       
    // component: Icons,
    //     },
    //     {
    //       path: "/typography",
    //       layout: "/admin",
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
    //       layout: "/admin",
    //       name: "Regular Forms",
    //       mini: "RF",
    // access: true, exact: true, //       
    // component: RegularForms,
    //     },
    //     {
    //       path: "/extended-forms",
    //       layout: "/admin",
    //       name: "Extended Forms",
    //       mini: "EF",
    //    access: true, exact: true, //       
    //  component: ExtendedForms,
    //     },
    //     {
    //       path: "/validation-forms",
    //       layout: "/admin",
    //       name: "Validation Forms",
    //       mini: "VF",
    //    access: true, exact: true, //       
    //  component: ValidationForms,
    //     },
    //     {
    //       path: "/wizard",
    //       layout: "/admin",
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
    //       layout: "/admin",
    //       name: "Regular Tables",
    //       mini: "RT",
    //    access: true, exact: true, //       
    //  component: RegularTables,
    //     },
    //     {
    //       path: "/extended-tables",
    //       layout: "/admin",
    //       name: "Extended Tables",
    //       mini: "ET",
    //    access: true, exact: true, //       
    //  component: ExtendedTables,
    //     },
    //     {
    //       path: "/react-table",
    //       layout: "/admin",
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
    //       layout: "/admin",
    //       name: "Google Maps",
    //       mini: "GM",
    //    access: true, exact: true, //       
    //  component: GoogleMaps,
    //     },
    //     {
    //       path: "/full-screen-maps",
    //       layout: "/admin",
    //       name: "Full Screen Map",
    //       mini: "FSM",
    //    access: true, exact: true, //       
    //  component: FullScreenMap,
    //     },
    //     {
    //       path: "/vector-maps",
    //       layout: "/admin",
    //       name: "Vector Map",
    //       mini: "VM",
    //    access: true, exact: true, //       
    //  component: VectorMap,
    //     },
    //   ],
    // },
    // {
    //   path: "/charts",
    //   layout: "/admin",
    //   name: "Charts",
    //   icon: "nc-icon nc-chart-bar-32",
    //    access: true, exact: true, //   
    //  component: Charts,
    // },
    // {
    //   path: "/calendar",
    //   layout: "/admin",
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
    //       layout: "/admin",
    //       name: "User Page",
    //       mini: "UP",
    //    access: true, exact: true, //       
    //  component: UserPage,
    //     },
    //     {
    //       path: "/login-page",
    //       layout: "/auth",
    //       name: "Login Page",
    //       mini: "LP",
    //    access: true, exact: true, //       
    //  component: LoginPage,
    //     },
    //     {
    //       path: "/register-page",
    //       layout: "/auth",
    //       name: "Register",
    //       mini: "RP",
    //    access: true, exact: true, //       
    //  component: RegisterPage,
    //     },
    //     {
    //       path: "/lock-screen-page",
    //       layout: "/auth",
    //       name: "Lock Screen Page",
    //       mini: "LSP",
    //    access: true, exact: true, //       
    //  component: LockScreenPage,
    //     },
    //   ],
    // },
    {
        collapse: true,
        path: "/settings",
        name: "Settings",
        state: "opensettings",
        icon: "nc-icon nc-settings-gear-64",
        views: [
            {
                path: "/site-settings",
                layout: "/admin",
                name: "Site Settings",
                mini: "SS",
                access: true, exact: true,
                component: SiteSettings,
            },
            {
                path: "/social-settings",
                layout: "/admin",
                name: "Social Settings",
                mini: "SS",
                access: true, exact: true,
                component: SocialSettings,
            },
            {
                path: "/ad-manager-settings",
                layout: "/admin",
                name: "Ad Manager Settings",
                mini: "AMS",
                access: true, exact: true,
                component: AdManagerSettings,
            },
            {
                path: "/meta-keywords-&-desc",
                layout: "/admin",
                name: "Meta Keywords & Desc",
                mini: "MKD",
                access: true, exact: true,
                component: MetaKeyDesc,
            },
        ],
    },
];
export default routes;
