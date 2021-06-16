import React, {Component, useState} from "react";
import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';


function Painel(props) {


    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">
                    Painel Administrador
                </h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">Palavra</th>
                        <th className="text-left p-3 px-5">Config. de Mão</th>
                        <th className="text-left p-3 px-5">Ponto de Artic.</th>
                        <th className="text-left p-3 px-5">Região</th>

                        <th></th>
                    </tr>
                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                        <td className="p-3 px-5">Palavra</td>
                        <td className="p-3 px-5">Config</td>
                        <td className="p-3 px-5">Ponto</td>
                        <td className="p-3 px-5">teste</td>
                        <td className="p-3 px-5 flex justify-end">
                            <button type="button"
                                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save
                            </button>
                            <button type="button"
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default Painel;
