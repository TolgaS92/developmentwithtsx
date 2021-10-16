import { ReactNode } from "react";

function List<ListItem>({
    items,
    render,
  }: {
    items: ListItem[],
    render: (item: ListItem) => ReactNode
  }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {render(item)}
          </li>
        ))}
      </ul>
    )
  }
  export default List;