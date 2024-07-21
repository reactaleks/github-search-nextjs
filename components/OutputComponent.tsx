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
      <div className="row-span-1 col-span-10 col-start-8 row-start-2">
        {props.userData.name}
      </div>
      <div className="row-span-1 col-span-10 col-start-8 row-start-3">
        <a className="text-blue"> @{props.userData.login}</a>
      </div>
      <div className="row-span-1 col-span-12 col-start-8 row-start-4">
        {props.userData.created_at}
      </div>
      <p className="row-span-4 col-span-20 col-start-3 row-start-6">
        {/* {props.userData.bio} */}
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <div className="flex justify-around items-center col-span-22 row-span-4 row-start-11 col-start-2 bg-cream dark:bg-darkModeBlack rounded-xl">
        <div>
          <div>Repos</div>
          <div>{props.userData.public_repos}</div>
        </div>
        <div>
          <div>Followes</div>
          <div>{props.userData.followers}</div>
        </div>
        <div>
          <div>Following</div>
          <div>{props.userData.following}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center content-center col-span-12 row-span-8 row-start-16 col-start-2 gap-2">
        <div className="flex justify-start items-center ">
          <LocationIconComponent className="fill-black dark:fill-white  w-[20px] h-[20px]" />

          {props.userData.location}
        </div>
        <div className="flex justify-start items-center">
          <WebsiteIconComponent className="fill-black dark:fill-white  w-[20px] h-[20px]" />
          {props.userData.blog}
        </div>
        <div className="flex justify-start items-center">
          <TwitterIconComponent className="fill-black dark:fill-white  w-[20px] h-[20px]" />

          {props.userData.twitter_username}
        </div>
        <div className="flex justify-start items-center">
          <CompanyIconComponent className="fill-black dark:fill-white w-[20px] h-[20px]" />

          {props.userData.company}
        </div>
      </div>
    </div>
  );
}
