import { LinkCrewH1 } from "common"
import Content from '@components/services/Content';
import Education from '@components/services/contents/Education';
import InHouseDev from '@components/services/contents/InHouseDev';
import CareerSupport from '@components/services/contents/CareerSupport';

export default function ServicesComponent() {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <LinkCrewH1 title="Services" />
      <div className="mt-20" aria-label="サービス一覧のコンテンツ">
        <Content title="教育" service_img_path="/service1.png" >
          <Education />
        </Content>
        <Content title="開発" service_img_path="/service1.png" >
          <InHouseDev />
        </Content>
        <Content title="キャリア支援" service_img_path="/service1.png" >
          <CareerSupport />
        </Content>
      </div>
    </div>
  )
}