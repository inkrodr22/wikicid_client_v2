import { SectionTypes } from '~/components/Layout/Layout.types.ts';
import { NavLink } from 'react-router-dom';

export default function AsideSection({ title, linkList }: SectionTypes) {
  return (
    <section className='flex flex-col gap-2'>
      <h4 className='text-sm font-semibold uppercase text-blue-primary'>
        {title}
      </h4>
      <ul className='flex flex-col justify-between gap-2'>
        {linkList.map(({ name, href, Icon, IconNegative }) => (
          <li key={name}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                isActive
                  ? 'flex w-full items-center gap-4 rounded-2xl bg-sky-100 p-5 py-2 font-semibold text-blue-primary'
                  : 'duration-350 hover:shadow-custom flex w-full items-center gap-4 rounded-2xl p-5 py-2 text-blue-primary transition-all hover:bg-sky-100/50 hover:duration-200'
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <IconNegative className='h-6 w-6' />
                  ) : (
                    <Icon className='h-6 w-6' />
                  )}
                  {name}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
