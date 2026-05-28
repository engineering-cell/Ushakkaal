type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={["mx-auto w-[min(1180px,calc(100%-44px))]", className ?? ""].join(" ")}>
      {children}
    </div>
  );
}

