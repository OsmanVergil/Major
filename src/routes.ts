import AutoCards from './pages/AutoCards';
import ClientCards from './pages/ClientCards';
import ClientHistoty from './pages/ClientHistoty';
import ClientContracts from './pages/ClientContracts';
import Main from './pages/Main';
import PrepaidInvoices from './pages/PrepaidInvoices';
import CashReceipts from './pages/CashReceipts';
import Requests from './pages/Requests';
import VehiclePassports from './pages/VehiclePassports';
import ContractsOfSale from './pages/ContractsOfSale';
import InvoicesForPayment from './pages/InvoicesForPayment';
import GoodsReceipts from './pages/GoodsReceipts';
import CashOrders from './pages/CashOrders';
import AcceptanceCertificates from './pages/AcceptanceCertificates';
import ClientPage from './pages/ClientPage';
import AutoCardPage from './pages/AutoCardPage';
import Constructor from './pages/Constructor';
import SalesReport from './pages/SalesReport';
import Login from './pages/Login';

export const privateRoutes = [
  {
    path: '/',
    element: Main,
  },
  {
    path: '/requests',
    element: Requests,
  },
  {
    path: '/clientCards',
    element: ClientCards,
  },
  {
    path: '/clientPage',
    element: ClientPage,
  },
  {
    path: '/autoCards',
    element: AutoCards,
  },
  {
    path: '/autoCardPage',
    element: AutoCardPage,
  },
  {
    path: '/constructor',
    element: Constructor,
  },
  {
    path: '/clientHistory',
    element: ClientHistoty,
  },
  {
    path: '/clientContracts',
    element: ClientContracts,
  },
  {
    path: '/prepaidInvoices',
    element: PrepaidInvoices,
  },
  {
    path: '/cashReceipts',
    element: CashReceipts,
  },
  {
    path: '/vehiclePassports',
    element: VehiclePassports,
  },
  {
    path: '/contractsOfSale',
    element: ContractsOfSale,
  },
  {
    path: '/invoicesForPayment',
    element: InvoicesForPayment,
  },
  {
    path: '/goodsReceipts',
    element: GoodsReceipts,
  },
  {
    path: '/cashOrders',
    element: CashOrders,
  },
  {
    path: '/acceptanceCertificates',
    element: AcceptanceCertificates,
  },
  {
    path: '/salesReport',
    element: SalesReport,
  },
  {
    path: '/*',
    element: Main,
  },
];

export const publicRoutes = [{
  path: '/*',
  element: Login
}]
