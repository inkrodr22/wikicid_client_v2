export default function Error({ error }: { error: string }) {
  return <span className='text-sm text-red-error'>{error}</span>;
}
