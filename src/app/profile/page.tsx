import { Session, getServerSession } from "next-auth";
import { authConfig } from "@/../configs/auth";
import styles from "./profile.module.scss";
import Image from "next/image";
import ProfileHeader from "@/сomponents/pageComponents/profile/profileHeader/ProfileHeader";
export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className={styles.main}>
      <ProfileHeader session={session} />
      <div className="mt-10">Page still in dev</div>
    </div>
  );
}
