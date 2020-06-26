import { Children, useState } from "react";

import { TabBody } from "src/components/Tabs/TabBody";
import { TabHead } from "src/components/Tabs/TabHead";

type Props = {
  children: React.ReactNode;
};

export function Tabs(props: Props) {
  const [tab, setTab] = useState(0);
  const { children } = props;
  const childrenArray = Children.toArray(children);
  const childrenCount = Children.count(children);
  const head = childrenArray.slice(0, childrenCount / 2);
  const body = childrenArray.slice(childrenCount / 2);

  return (
    <div className="space-y-4">
      <div className="flex">
        {head.map((child, i) => (
          <TabHead key={i} isSelected={tab === i} onClick={() => setTab(i)}>
            {child}
          </TabHead>
        ))}
      </div>

      {body.map((child, i) => (
        <TabBody key={i} show={tab === i}>
          {child}
        </TabBody>
      ))}
    </div>
  );
}
