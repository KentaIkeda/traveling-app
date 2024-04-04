import Link from 'next/link';

interface NavigationListType {
  id: number;
  toName: string;
  href: string;
}
export default function Navigation() {
  const navigationList: Array<NavigationListType> = [
    { id: 1, toName: 'トップ', href: '/' },
  ];

  return (
    <nav>
      <ul>
        {navigationList.map((nav) => (
          <li
            key={nav.id}
            className='group'
          >
            <Link
              href={nav.href}
              className='w-full h-full px-3 py-2 group-hover:bg-blue-950/20 transition rounded-md'
            >
              {nav.toName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
