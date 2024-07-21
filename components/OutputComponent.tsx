
// Things needed from github api
// Login / Avatar/ Name / Created_at / Bio / Public_repos / Followers / Following / Location / Blog / Twitter_username / Company
import Image from "next/image";
export default function OutputComponent(props:any) {

        console.log(props.userData);

        return (
            <div className="w-[327px] h-[517px] border flex flex-col justify-around">
              <div className="flex">
                <div>
                  <div className="w-[75px] h-[75px] border rounded-full">
                    <img src={props.userData.avatar_url} width={75} height={75} alt=""/>

                  </div>
                </div>
                <div>
                  <p>{props.userData.name}</p>
                  <p>{props.userData.login}</p>
                  <p>{props.userData.created_at}</p>
                </div>
              </div>
              <div className="w-[279px] h-[75px]">
                <p>
                  {props.userData.bio}
                </p>
              </div>
        
              <div className="w-[279px] h-[85px] flex">
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
        
              <div className="flex flex-col">
                <div className="flex">
                  <div>Icon</div>
                  <div>{props.userData.location}</div>
                </div>
                <div className="flex">
                  <div>Icon</div>
                  <div>{props.userData.blog}</div>
                </div>
                <div className="flex">
                  <div>Icon</div>
                  <div>{props.userData.twitter_username}</div>
                </div>
                <div className="flex">
                  <div>Icon</div>
                  <div>{props.userData.company}</div>
                </div>
              </div>
            </div>
          );


 
}
