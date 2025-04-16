import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getYearToDatePerformance } from "../../api"; // Assuming this API exists
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

type Props = {};

const YearToDatePerformance = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [performanceData, setPerformanceData] = useState<{ date: string; price: number }[]>([]);
    const [startDate, setStartDate] = useState("2024-04-01"); // Default start date
const [endDate, setEndDate] = useState("2025-04-01"); // Default end date


    useEffect(() => {
        const fetchYearToDatePerformance = async () => {
            const response = await getYearToDatePerformance(ticker);
            const data = response?.data;
    
            if (data && Array.isArray(data)) {
                const filteredData = data.filter((item) => {
                    const itemDate = new Date(item.date);
                    return (
                        itemDate >= new Date(startDate) &&
                        itemDate <= new Date(endDate)
                    );
                });
                const sortedData = filteredData.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA.getTime() - dateB.getTime();
                });
                setPerformanceData(sortedData);
            } else {
                setPerformanceData([]);
            }
        };
        fetchYearToDatePerformance();
    }, [ticker, startDate, endDate]); // Re-run when dates change
    
    

    return (
        <>
        <div className="date-filter">
            <label>
                Start Date:
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </label>
            <label>
                End Date:
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </label>
        </div>
        {performanceData && performanceData.length > 0 ? (
            <LineChart
            width={600}
            height={300}
            data={performanceData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="date"
                tickFormatter={(date: string) =>
                    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                }
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />

        </LineChart>
        ) : (
            <h1 className="ml-3">No year-to-date performance data available!</h1>
        )}
    </>
    );
};





export default YearToDatePerformance;
