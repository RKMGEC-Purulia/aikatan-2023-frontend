import MemberCard from '@/components/MemberCard'
import { headMemberDetails, membersDetails } from '@/data/member'

const Committee = () => {
  return (
    <section className=" w-full  pt-12">
      <div>
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Head Team Member
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {headMemberDetails.map((member) => (
            <MemberCard
              key={member.Timestamp}
              name={member.name}
              role={member.role}
              Instagram={member?.Instagram}
              linkedIn={member?.linkedIn}
              imgId={member.imgId}
            />
          ))}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Cultural Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'cultural' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Techlavya
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'techlavya' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Budgeting & Funding Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'budgeting & funding' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Social Media & Designing Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() ===
                'social media & designing' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Public Relation Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'public relation' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Sponsorship & Marketing Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() ===
                'sponsorship & marketing' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Web Designing Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'web designing' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Security & Surveillance Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() ===
                'security & surveillance' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
      <div className=" mt-10">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
          <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
            Food Committee
          </span>
        </h1>
        <div className=" flex flex-wrap gap-4 justify-center">
          {membersDetails.map(
            (member) =>
              member.role.toLowerCase().trim() === 'food' && (
                <MemberCard
                  key={member.Timestamp}
                  name={member.name}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              )
          )}
        </div>
      </div>
    </section>
  )
}

export default Committee
