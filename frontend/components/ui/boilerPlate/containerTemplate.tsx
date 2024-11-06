import { View } from "@/components/Themed";

type ContainerTemplateProps = {
  content: () => JSX.Element;
};

export default function ContainerTemplate({ content }: ContainerTemplateProps) {
  return <View className="flex-1 p-5">{content()}</View>;
}
