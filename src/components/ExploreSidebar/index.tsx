import { useState } from 'react';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import { Close, FilterList } from 'styled-icons/material-outlined';

import * as S from './styles';

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
  checked?: boolean;
};

type Values = {
  [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  onFilter: (values: Values) => void;
  initialValues?: Values;
};

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(values);
    setIsOpen(false);
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />

      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item: ItemProps) => (
          <S.Items key={item.name}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.fields.map((field: Field) => (
              <div key={field.name}>
                {item.type === 'checkbox' ? (
                  <Checkbox
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    labelFor={field.name}
                    isChecked={!!values[field.name]}
                    onCheck={(v) => handleChange(field.name, v)}
                  />
                ) : (
                  <Radio
                    id={field.name}
                    name={item.name}
                    label={field.label}
                    labelFor={field.name}
                    value={field.name}
                    onChange={() => handleChange(item.name, field.name)}
                    defaultChecked={values[item.name] === field.name}
                  />
                )}
              </div>
            ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ExploreSidebar;
