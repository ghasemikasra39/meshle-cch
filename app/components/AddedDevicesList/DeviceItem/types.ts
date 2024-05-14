export type DeviceItemProps = {
  id: string;
  isOn: boolean;
  title: string;
  setSelectedIndex: (id: string, index: number) => void;
};
