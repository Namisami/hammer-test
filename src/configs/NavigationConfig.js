import { 
  DashboardOutlined, 
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const primaryNavTree = [{
  key: 'primary',
  path: `${APP_PREFIX_PATH}/primary`,
  title: 'Основные',
  icon: '',
  breadcrumb: true,
  submenu: [
    {
      key: 'primary-dashboard',
      path: `${APP_PREFIX_PATH}/primary/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'primary-catalog',
      path: `${APP_PREFIX_PATH}/primary/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'primary-catalog-items',
          path: `${APP_PREFIX_PATH}/primary/catalog/items`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'primary-catalog-categories',
          path: `${APP_PREFIX_PATH}/primary/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'primary-catalog-collections',
          path: `${APP_PREFIX_PATH}/primary/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'primary-catalog-combos',
          path: `${APP_PREFIX_PATH}/primary/catalog/combos`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'primary-orders',
      path: `${APP_PREFIX_PATH}/primary/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'primary-clients',
      path: `${APP_PREFIX_PATH}/primary/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'primary-clients-list',
          path: `${APP_PREFIX_PATH}/primary/clients/list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'primary-clients-groups',
          path: `${APP_PREFIX_PATH}/primary/clients/groups`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'primary-banners',
      path: `${APP_PREFIX_PATH}/primary/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'primary-promo',
      path: `${APP_PREFIX_PATH}/primary/promo`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'primary-shops',
      path: `${APP_PREFIX_PATH}/primary/shops`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'primary-shops-addresses',
          path: `${APP_PREFIX_PATH}/primary/shops/addresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'primary-shops-geozones',
          path: `${APP_PREFIX_PATH}/primary/shops/geozones`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'primary-employees',
      path: `${APP_PREFIX_PATH}/primary/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'primary-mail',
      path: `${APP_PREFIX_PATH}/primary/mail`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-apps',
      path: `${APP_PREFIX_PATH}/system/apps`,
      title: 'Мобильные приложения',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...primaryNavTree,
  ...systemNavTree
]

export default navigationConfig;
