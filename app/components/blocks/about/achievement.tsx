interface IAchievement {
  title: string;
  amount: number;
  children: React.ReactNode;
}

export const Achievement = ({ title, children }: IAchievement) => {
  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">{title}</span>
      </h1>
    </div>
  );
};
