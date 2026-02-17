import { Geo } from '../app/providers/GeoProvider';

interface Translations {
  title: string;
  description: string;
  playButton: string;
  footerDownloadTitle: string;
  footerDownloadSubtitle: string;
  footerInstallButton: string;
  footerOnly18: string;
  footerLicense: string;
}

export const translations: Record<Geo, Translations> = {
  EN: {
    title: 'Welcome to Geo Casino',
    description: 'Play your favorite games safely!',
    playButton: 'OPEN THE GAME',
    footerDownloadTitle: 'Download Casino',
    footerDownloadSubtitle: 'Play anytime, anywhere',
    footerInstallButton: 'Install App',
    footerOnly18: 'Only 18+',
    footerLicense: 'Casino is certified by the Anjouan Gaming Authority',
  },
  TR: {
    title: 'Geo Casino’ya hoş geldin',
    description: 'En sevdiğin oyunları güvenle oyna!',
    playButton: 'OYUNU AÇ',
    footerDownloadTitle: 'Casinoyu indir',
    footerDownloadSubtitle: 'İstediğin yerde, istediğin zaman oyna',
    footerInstallButton: 'Uygulamayı yükle',
    footerOnly18: 'Sadece 18+',
    footerLicense: 'Casino, Anjouan Oyun Otoritesi tarafından lisanslanmıştır',
  },
  RU: {
    title: 'Добро пожаловать в Geo Casino',
    description: 'Играйте в свои любимые игры безопасно!',
    playButton: 'Открыть игру',
    footerDownloadTitle: 'Скачать казино',
    footerDownloadSubtitle: 'Играйте где угодно и когда угодно',
    footerInstallButton: 'Установить приложение',
    footerOnly18: 'Только 18+',
    footerLicense: 'Казино лицензировано регулятором Anjouan Gaming Authority',
  },
};