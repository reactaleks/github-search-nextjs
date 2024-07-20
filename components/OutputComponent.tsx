export default function OutputComponent() {
  return (
    <div className="w-[327px] h-[517px] border flex flex-col justify-around">
      <div className="flex">
        <div>
          <div className="w-[75px] h-[75px] border rounded-full"></div>
        </div>
        <div>
          <p>Name</p>
          <p>Username</p>
          <p>Date Joined</p>
        </div>
      </div>
      <div className="w-[279px] h-[75px]">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>

      <div className="w-[279px] h-[85px] flex">
        <div>
          <div>Repos</div>
          <div>0</div>
        </div>
        <div>
          <div>Followes</div>
          <div>3244</div>
        </div>
        <div>
          <div>Following</div>
          <div>9</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <div>Icon</div>
          <div>Location</div>
        </div>
        <div className="flex">
          <div>Icon</div>
          <div>Github Blog</div>
        </div>
        <div className="flex">
          <div>Icon</div>
          <div>Twitter username</div>
        </div>
        <div className="flex">
          <div>Icon</div>
          <div>Company name</div>
        </div>
      </div>
    </div>
  );
}
