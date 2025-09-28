import ContentLayout from "@/app/components/ContentLayout";


const outreachinfo = [
    {
      title: "Outreach Info",
      titleColor: "text-sage-light",
      subtitle: "Jake Dong My King",
      description: `we r the goats`,
    },
  ];

export default function Outreach(){
    return (
        <div>
            <ContentLayout content = {outreachinfo}/>
        </div>
    )
}