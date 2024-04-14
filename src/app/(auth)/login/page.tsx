import { Button } from "@/shared/ui/button";
import clsx from "clsx";
import React from "react";

type pageProps = {
  className?: string;
};

const page = React.memo((props: pageProps) => {
  const { className } = props;
  return (
    <div className={clsx("", className)}>
      <Button variant={"secondary"}>Привет всем</Button>
    </div>
  );
});

page.displayName = "page";

export default page;
