import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

import MemberCard from '@/components/MemberCard'
import { headMemberDetails, membersDetails } from '@/data/member'

const Committee = () => {
  const [search, setSearch] = useState('')
  const [filterVal, setFilterVal] = useState('all')
  console.log(search.toLowerCase())

  return (
    <section className=" w-full pt-12 ">
      <div className=" mt-10 w-full flex items-center px-4 gap-6">
        <div className=" w-full relative">
          <IoSearch
            className=" absolute top-3.5 left-3.5 opacity-60"
            size={16}
          />
          <input
            type="text"
            className=" w-full py-3 pl-10 pr-5 bg-gray-800 outline-none shadow-lg rounded-lg text-sm sm:text-base text-white"
            placeholder="Search Your Name"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className=" w-full">
          <select
            className="w-full py-3.5 px-5 bg-gray-800 outline-none shadow-lg rounded-lg text-sm sm:text-base text-white cursor-pointer"
            defaultValue={'Filter'}
            onChange={(e) => setFilterVal(e.target.value)}>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="all">
              All Committee
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="head">
              Head Team
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="cultural">
              Cultural
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="techlavya">
              Techlavya
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="budgeting">
              Budgeting & Funding
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="social_media">
              Social Media & Designing
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="public_relation">
              Public Relation
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="sponsorship">
              Sponsorship & Marketing
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="web">
              Web Designing
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="security">
              Security & Surveillance
            </option>
            <option
              className="my-3 text-sm sm:text-base cursor-pointer"
              value="food">
              Food
            </option>
          </select>
        </div>
      </div>

      {(filterVal === 'all' || filterVal === 'head') && (
        <div>
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Head Team Member
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {headMemberDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  Instagram={member?.Instagram}
                  linkedIn={member?.linkedIn}
                  imgId={member.imgId}
                />
              ))}
          </div>
        </div>
      )}

      {(filterVal === 'all' || filterVal === 'cultural') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Cultural Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() === 'cultural' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}

      {(filterVal === 'all' || filterVal === 'techlavya') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Techlavya
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() === 'techlavya' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}

      {(filterVal === 'all' || filterVal === 'budgeting') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Budgeting & Funding Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() ===
                    'budgeting & funding' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'social_media') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Social Media & Designing Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() ===
                    'social media & designing' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'public_relation') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Public Relation Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() === 'public relation' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'sponsorship') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Sponsorship & Marketing Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() ===
                    'sponsorship & marketing' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'web') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Web Designing Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() === 'web designing' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'security') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Security & Surveillance Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() ===
                    'security & surveillance' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
      {(filterVal === 'all' || filterVal === 'food') && (
        <div className=" mt-10">
          <h1 className=" text-3xl sm:text-4xl xl:text-5xl my-8 uppercase font-extrabold text-center">
            <span className=" text-transparent bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text">
              Food Committee
            </span>
          </h1>
          <div className=" flex flex-wrap gap-4 justify-center">
            {membersDetails
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map(
                (member) =>
                  member.role.toLowerCase().trim() === 'food' && (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      Instagram={member?.Instagram}
                      linkedIn={member?.linkedIn}
                      imgId={member.imgId}
                    />
                  )
              )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Committee
