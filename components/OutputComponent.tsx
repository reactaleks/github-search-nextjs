// Things needed from github api
// Login / Avatar/ Name / Created_at / Bio / Public_repos / Followers / Following / Location / Blog / Twitter_username / Company
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
        className="row-span-6 col-span-6 col-start-3 row-start-2 rounded-full w-[70px] h-[70px]"
      />
      <div className="row-span-1 col-span-12 col-start-9 row-start-2 font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
        {!props.userData.name ? 'Mystery' : props.userData.name}
      </div>
      <div className="row-span-1 col-span-10 col-start-9 row-start-3 font-space text-[13px]">
        <a href={props.userData.html_url} target="_blank" className="text-blue font-space text-[13px] cursor-pointer hover:underline">
          @{props.userData.login}
        </a>
      </div>
      <div className="row-span-1 col-span-12 col-start-9 row-start-4 font-space text-[13px] text-lightblue dark:text-darkModeWhite">
        Joined {new Date(props.userData.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </div>
      <p className={`row-span-4 col-span-20 col-start-3 row-start-6 font-space text-[13px] leading-[25px] ${!props.userData.bio ? 'text-[#A4B4CC] dark:text-[#A4B4CC]' : 'text-lightblue dark:text-darkModeWhite'} `}>
        {!props.userData.bio ? 'I am a misterious github user who has nothing in my bio' : props.userData.bio}

      </p>

      <div className="flex justify-around items-center col-span-20 row-span-4 row-start-12 col-start-3 bg-cream dark:bg-darkModeBlack rounded-xl">
        <div className="text-center">
          <div className="font-space text-[11px] text-lightblue dark:text-darkModeWhite">Repos</div>
          <div className="font-spacebold font-bold text-[16px] text-black dark:text-darkModeWhite">
            {props.userData.public_repos}
          </div>
        </div>
        <div className="text-center">
          <div className="font-space text-[11px] text-lightblue dark:text-darkModeWhite">Followers</div>
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

      <LocationIconComponent className={`${!props.userData.location ? 'fill-[#A4B4CC] dark:fill-[#A4B4CC]' : 'fill-darkblue'} dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-17 col-start-3`} />
      <div className={`font-space text-[13px] ${!props.userData.location ? 'text-[#A4B4CC] dark:text-[#A4B4CC]' : 'text-darkblue'}  row-span-1 col-span-18 row-start-17 col-start-6 dark:text-darkModeWhite`}>
        {!props.userData.location ? 'Not available' : props.userData.location}
      </div>
      <WebsiteIconComponent className={`${!props.userData.blog ? 'fill-[#A4B4CC] dark:fill-[#A4B4CC]'  : 'fill-darkblue'} dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-19 col-start-3`} />
      <div className={`font-space text-[13px] ${!props.userData.blog ? 'text-[#A4B4CC] dark:text-[#A4B4CC]' : 'text-darkblue'}  row-span-1 col-span-18 row-start-19 col-start-6 dark:text-darkModeWhite`}>
         {!props.userData.blog ? 'Not available' : <a href={props.userData.blog} target="_blank" className="cursor-pointer hover:underline">{props.userData.blog}</a>}
      </div>
      <TwitterIconComponent className={`${!props.userData.twitter_username ? 'fill-[#A4B4CC] dark:fill-[#A4B4CC]' : 'fill-darkblue'} dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-21 col-start-3`} />
      <div className={`font-space text-[13px] ${!props.userData.twitter_username ? 'text-[#A4B4CC] dark:text-[#A4B4CC]' : 'text-darkblue'}  row-span-1 col-span-18 row-start-21 col-start-6 dark:text-darkModeWhite`}>
        {!props.userData.twitter_username ? 'Not available' : props.userData.twitter_username}
      </div>
      <CompanyIconComponent className={`${!props.userData.company ? 'fill-[#A4B4CC] dark:fill-[#A4B4CC]' : 'fill-darkblue'} dark:fill-white  w-[20px] h-[20px] row-span-1 col-span-2 row-start-23 col-start-3`} />
      <div className={`font-space text-[13px] ${!props.userData.company ? 'text-[#A4B4CC] dark:text-[#A4B4CC]' : 'text-darkblue'}  row-span-1 col-span-18 row-start-23 col-start-6 dark:text-darkModeWhite`}>
        {!props.userData.company ? 'Not available' : props.userData.company}
      </div>
    </div>
  );
}
