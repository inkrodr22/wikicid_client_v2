import Home from '~/assets/icons/home.svg?react';
import HomeNegative from '~/assets/icons/home-negative.svg?react';
import News from '~/assets/icons/news.svg?react';
import NewsNegative from '~/assets/icons/news-negative.svg?react';
import Link from '~/assets/icons/link.svg?react';
import LinkNegative from '~/assets/icons/link.svg?react';
import World from '~/assets/icons/world.svg?react';
import WorldNegative from '~/assets/icons/world-negative.svg?react';
import Catalog from '~/assets/icons/catalog.svg?react';
import CatalogNegative from '~/assets/icons/catalog-negative.svg?react';
import Calendar from '~/assets/icons/calendar.svg?react';
import CalendarNegative from '~/assets/icons/calendar-negative.svg?react';
import Building from '~/assets/icons/building.svg?react';
import BuildingNegative from '~/assets/icons/building-negative.svg?react';
import Microphone from '~/assets/icons/microphone.svg?react';
import MicrophoneNegative from '~/assets/icons/microphone-negative.svg?react';
import QuestionMark from '~/assets/icons/question-mark.svg?react';
import QuestionMarkNegative from '~/assets/icons/question-mark-negative.svg?react';

const adminLinks = [
];

const cidLinks = [
  {
    name: 'Catálogo de recursos',
    href: 'resources',
    Icon: Link,
    IconNegative: LinkNegative,
  },
];

const carsoLinks = [
  {
    name: 'Inicio',
    href: 'carso',
    Icon: Home,
    IconNegative: HomeNegative,
  },
  {
    name: 'Preguntas',
    href: 'preguntas',
    Icon: QuestionMark,
    IconNegative: QuestionMarkNegative,
  },
  {
    name: 'Noticias',
    href: 'noticias',
    Icon: News,
    IconNegative: NewsNegative,
  },
  {
    name: 'Blog',
    href: 'blog',
    Icon: World,
    IconNegative: WorldNegative,
  },
  {
    name: 'Podcast',
    href: 'podcast',
    Icon: Microphone,
    IconNegative: MicrophoneNegative,
  },
  {
    name: 'Eventos',
    href: 'eventos',
    Icon: Calendar,
    IconNegative: CalendarNegative,
  },
];

export { adminLinks, cidLinks, carsoLinks };
