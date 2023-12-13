import Image from "next/image";
import { useEffect, useState } from "react";

export default function Commande() {


  const tableData: any = [
    {
      event: "yassir",
      orderId: 58964,
      amount: "150 MAD",
      date: "07/09/2003",
      type: "Match",
      paymentStatus: "Brouillon",
      action: "3winat",
    },
  ];

  const itemsPerPage = 5; // Adjust this as needed
  const [currentPage, SetCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: any) => {
    SetCurrentPage(selected);
  };

  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  // Calculate the data to display on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToShow = tableData.slice(startIndex, endIndex);

  const initialOpacite = {
    column1: true,
    column2: true,
    column3: true,
    column4: true,
    column5: true,
  };

  const TableComponent = () => {
    const [opacite, setOpacite] = useState(initialOpacite);

    const hideColumn = (columnName: any) => {
      setOpacite({ ...opacite, [columnName]: false });
    };

    const showColumn = (columnName: any) => {
      setOpacite({ ...opacite, [columnName]: true });
    };

    const columns = Object.keys(opacite);
  };

  useEffect(() => {
    const scrollToElement = () => {
      const container = document.getElementById("tablecontainer");
      const element = document.getElementById("tableelement");

      if (container && element) {
        container.scrollTo({
          left: element.offsetLeft,
          behavior: "smooth",
        });
      }
    };
    scrollToElement();
  });

  return (
    <div
      id="tablecontainer"
      className="bg-darkgreen  lg:w-[800px] md:w-[60%]  md:ml-5  border-red mt-5 md:mt-0  lg:mt-0"
      style={{ whiteSpace: "nowrap" }}
    >
      <div id="tableelement" className="flex flex-col  overflow-auto  m-5">
        <div className="flex flex-col lg:flex-row justify-between  text-white">
          <p className="text-2xl font-helvatica">Suivi Mes commandes</p>
          <div className="flex items-center  border  rounded-full w-[206px] h-[44px] relative ">
            <input
              type="text"
              placeholder="Recherche..."
              className=" placeholder-white absolute bg-transparent outline-none p-2 h-full object-contain rounded-full"
            />
            <Image
              src="/SearchGlass.png"
              width={20}
              height={20}
              className="absolute  right-0 mr-2"
              alt=""
            />
          </div>
        </div>

        <div className=" text-white mt-5 h-[310px] rounded-md relative  ">
          <table className="absolute">
            <thead>
              <tr className="bg-white bg-opacity-[15%] rounded-lg">
                <th className="w-[150px]  border-b border-r border-r-darkgreen h-[50px]">
                  Événement
                </th>
                <th className="w-[120px]  border-b border-r border-r-darkgreen h-[50px]">
                  ID commande
                </th>
                <th className="w-[83px] border-b border-r border-r-darkgreen h-[50px]">
                  Montant
                </th>
                <th className="w-[91px] border-b border-r border-r-darkgreen h-[50px]">
                  Date
                </th>
                <th className="w-[87px] border-b border-r border-r-darkgreen h-[50px]">
                  Type
                </th>
                <th className="w-[134px]  border-b border-r border-r-darkgreen h-[50px]">
                  Statut paiement
                </th>
                <th className="w-[100px] h-[50px] border-b  ">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataToShow.map((tableData: any, index: any) => (
                <tr
                  key={index}
                  className={`items-center h-[50px] bg-white bg-opacity-[5%] `}
                >
                  <td className="text-center  border-r  border-b border-darkgreen ">
                    {tableData.event}
                  </td>
                  <td className="text-center  border-r  border-b border-darkgreen">
                    {tableData.orderId}
                  </td>

                  <td className="text-center  border-r  border-b border-darkgreen w-[50px]">
                    {tableData.amount}
                  </td>

                  <td className="text-center  border-r  border-b border-darkgreen">
                    {tableData.date}
                  </td>
                  <td className="text-center  border-r  border-b border-darkgreen">
                    {tableData.type}
                  </td>
                  <td className="text-center  border-r  border-b border-darkgreen">
                    {tableData.paymentStatus}
                  </td>
                  <td className="text-center  border-r w-[100px] border-b  border-darkgreen">
                    <div className="flex items-center  justify-center gap-1 ">
                      <div className="w-10 h-5">
                        <Image src="/vue.png" alt="" className="object-contain" width={30} height={30} />
                      </div>
                      <div className="w-10 h-5">
                        <Image
                          src="/trash.png"
                          alt=""
                          className="object-contain"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`flex justify-between gap-1 md:flex-row flex-col m-5 ${
          tableData.length > 5 ? "block" : "hidden"
        } `}
      >
        <p className="text-sm  text-white">
          Affichage de 1 à {currentPage + 1} sur {pageCount} entrées
        </p>
        <div className="flex gap-3">
          <div
            className=" h-[32px] w-[32px] rounded-full"
            onClick={() =>
              SetCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage)
            }
          >
            <Image src="/previous.png" className="object-contain" width={500} height={500} alt=""/>
          </div>
          <div
            className=" h-[32px] w-[32px] rounded-full"
            onClick={() =>
              SetCurrentPage(
                currentPage === pageCount - 1 ? currentPage : currentPage + 1
              )
            }
          >
            <Image src="/next.png" className="object-contain" width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
