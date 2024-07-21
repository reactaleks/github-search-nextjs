// Things needed from github api
// Login / Avatar/ Name / Created_at / Bio / Public_repos / Followers / Following / Location / Blog / Twitter_username / Company
import Image from "next/image";
import TwitterIconComponent from "@/public/assets/icon-twitter";
import WebsiteIconComponent from "@/public/assets/icon-website";
import LocationIconComponent from "@/public/assets/icon-location";
import CompanyIconComponent from "@/public/assets/icon-company";

export default function OutputComponent(props: any) {
  return (
    <div className="w-[327px] h-[517px] rounded-xl shadow-xl bg-white mx-auto grid grid-rows-24 grid-cols-24 dark:bg-darkModeBlue">
      <img
        src={props.userData.avatar_url}
        width={75}
        height={75}
        alt=""
        className="row-span-6 col-span-6 col-start-2 row-start-2 rounded-full"
      />
      <div className="row-span-1 col-span-10 col-start-8 row-start-2 font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
        {props.userData.name}
      </div>
      <div className="row-span-1 col-span-10 col-start-8 row-start-3 font-space text-[13px]">
        <a className="text-blue font-space text-[13px]">
          @{props.userData.login}
        </a>
      </div>
      <div className="row-span-1 col-span-12 col-start-8 row-start-4 font-space text-[13px] text-lightblue dark:text-darkModeWhite">
        {props.userData.created_at}
      </div>
      <p className="row-span-4 col-span-20 col-start-3 row-start-6 font-space text-[13px] leading-[25px] text-lightblue dark:text-darkModeWhite">
        {props.userData.bio}
      </p>

      <div className="flex justify-around items-center col-span-22 row-span-4 row-start-11 col-start-2 bg-cream dark:bg-darkModeBlack rounded-xl">
        <div className="text-center">
          <div className="font-space text-[11px] text-lightblue dark:text-darkModeWhite">Repos</div>
          <div className="font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
            {props.userData.public_repos}
          </div>
        </div>
        <div className="text-center">
          <div className="font-space text-[11px] text-lightblue dark:text-darkModeWhite">Followes</div>
          <div className="font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
            {props.userData.followers}
          </div>
        </div>
        <div className="text-center">
          <div className="font-space text-[11px] text-lightblue dark:text-darkModeWhite">Following</div>
          <div className="font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
            {props.userData.following}
          </div>
        </div>
      </div>

      <LocationIconComponent className="fill-darkblue dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-16 col-start-2" />
      <div className="font-space text-[13px] text-darkblue row-span-1 col-span-18 row-start-16 col-start-4 dark:text-darkModeWhite">
        {props.userData.location}
      </div>
      <WebsiteIconComponent className="fill-darkblue dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-18 col-start-2" />
      <div className="font-space text-[13px] text-darkblue row-span-1 col-span-18 row-start-18 col-start-4 dark:text-darkModeWhite">
        {props.userData.blog}
      </div>
      <TwitterIconComponent className="fill-darkblue dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-20 col-start-2" />
      <div className="font-space text-[13px] text-darkblue row-span-1 col-span-18 row-start-20 col-start-4 dark:text-darkModeWhite">
        {props.userData.twitter_username}
      </div>
      <CompanyIconComponent className="fill-darkblue dark:fill-white w-[20px] h-[20px] row-span-1 col-span-2 row-start-22 col-start-2" />
      <div className="font-space text-[13px] text-darkblue row-span-1 col-span-18 row-start-22 col-start-4 dark:text-darkModeWhite">
        {props.userData.company}
      </div>
    </div>
  );
}
