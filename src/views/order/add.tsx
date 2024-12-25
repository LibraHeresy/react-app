import styles from "./add.module.css";
import avatar from "@/assets/avatar.png";
import counter from "../../store/Counter";
import { observer } from 'mobx-react';

interface WrapperProps {
  title: string;
  value: string;
}
function Wrapper({ title, value }: WrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_label}>{title}</div>
      <div className={styles.wrapper_value}>{value}</div>
    </div>
  );
}

interface WrapperVerticalProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}
function WrapperVertical({ title, subTitle, children }: WrapperVerticalProps) {
  return (
    <div className={styles.wrapper_vertical}>
      <div className={styles.wrapper_vertical_title}>{title}</div>
      <div className={styles.wrapper_vertical_sub_title}>{subTitle}</div>
      {children}
    </div>
  );
}

interface ImageProps {
  src: string;
}
function CustomImage({ src }: ImageProps) {
  return <img className={styles.image} src={src} alt="" />;
}

interface CardProps {
  title: string;
  children: React.ReactNode;
}
function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card_title}>{title}</div>
      {children}
    </div>
  );
}

interface BtnWrapperperProps {
  onSave: () => void;
  onSubmit: () => void;
}
function BtnWrapperper({ onSave, onSubmit }: BtnWrapperperProps) {
  return (
    <div>
      <div className={styles.btn_wrapper_seat}></div>
      <div className={styles.btn_wrapper}>
        <div
          className={[styles.btn_default, styles.btn].join(" ")}
          onClick={onSave}
        >
          暂存
        </div>
        <div
          className={[styles.btn_primary, styles.btn].join(" ")}
          onClick={onSubmit}
        >
          提交
        </div>
      </div>
    </div>
  );
}

const save = () => {
  alert("暂存成功");
};
const submit = () => {
  alert("提交成功");
};

const Page = observer(() => {
  return (
    <div className={styles.page}>
      <Card title="保险信息">
        <Wrapper title="报案号" value={counter.count.toString()} />
        <Wrapper title="保险公司" value="众诚汽车保险股份有限公司" />
        <Wrapper title="下单时间" value="2024-11-19" />
        <Wrapper title="定损员联系人" value="黄伟杰" />
        <Wrapper title="定损员联系电话" value="13799847845" />
      </Card>

      <Card title="车辆信息">
        <div className={styles.mt_32}>
          <WrapperVertical
            title="行驶证照片"
            subTitle="上传完行驶证后，系统将自动识别填写下方的车牌号以及车架号"
          >
            <div className={styles.images}>
              <CustomImage src={avatar} />
              <CustomImage src={avatar} />
              <CustomImage src={avatar} />
              <CustomImage src={avatar} />
              <CustomImage src={avatar} />
              <CustomImage src={avatar} />
            </div>
          </WrapperVertical>
        </div>
        <Wrapper title="车牌号" value="粤B163NH" />
        <Wrapper title="车架号" value="LC0CE4DB9M0004871" />
      </Card>

      <BtnWrapperper onSave={save} onSubmit={submit} />
    </div>
  );
});

export default Page;
