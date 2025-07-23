export type CustomListProps = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export const CustomList = ({
  first,
  second,
  third,
  fourth,
}: CustomListProps) => {
  return (
    <ul>
      <li>{first}</li>
      <li>{second}</li>
      <li>{third}</li>
      <li>{fourth}</li>
    </ul>
  );
};
