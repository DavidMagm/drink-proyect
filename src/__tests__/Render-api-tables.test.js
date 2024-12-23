import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MoneyPageProvider, MoneyPageContext } from "../Context";


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ listRateNameLatest: { USD: 1.2 } , nameCompleteCurrency: {name : 'USD'} }),
    })
);  

test('context promsime lastest api', async () => {
    const ConstumerComponent = () => {
        const { listRateNameLatest, nameCompleteCurrency } = React.useContext(MoneyPageContext)
        return (
            <div>
                <div>{listRateNameLatest.USD}</div>
                <div>{nameCompleteCurrency.name}</div>
            </div>
        )
    }
    render(
        <MemoryRouter>
            <MoneyPageProvider>
                <ConstumerComponent />
            </MoneyPageProvider>
        </MemoryRouter>
    )

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2))
})
