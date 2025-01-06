import { useGetDashBoard } from "../../Hooks/useDashboard";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { AdminNav } from "./adminNav"

export const Dashboard = () => {
    const { data } = useGetDashBoard();
    const { data: tabledata } = useDetailsFetch();
    const trData = tabledata?.data[0];
    const attributes = trData?.table;
    return (
        <div>
            <AdminNav />
            <div className="w-screen h-full box-border p-10">
                <table className="w-full border font-f-regular" >
                    <tr className=" text-xl font-semibold">
                        {attributes?.map((item: string, index: number) => (
                            <td key={index} className="text-center border border-black  ">
                                <span className="flex p-4">
                                    {item}
                                </span>
                            </td>
                        )
                        )}
                    </tr>
                    {data?.resp.map((item: any, index: number) => (
                        <tr key={index} className="border-black  ">
                            <td className="border border-black ">
                                <span className="flex p-2 ">{item.Oid}</span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.user}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.id}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.name}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.price}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.count}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.newPrice}
                                </span>
                            </td>
                            <td className="border border-black">
                                <span className="px-4">
                                    {item.change}
                                </span>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}


