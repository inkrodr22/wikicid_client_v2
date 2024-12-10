export default function Filter({ options }: { options: string[] }) {
  return options.map(o => (
    <label
      key={o}
      className='flex gap-[10px] rounded-md p-3 font-medium text-blue-primary'
    >
      <input type='checkbox' />
      {o}
    </label>
  ));
}
