import { useEffect, useState } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import { SlideOver } from "../components/SlideOver";
import { TooltipCard } from "../components/TooltipCard";
import { Chart } from "../components/Chart";
import styled from "styled-components";

// Layout styles
const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
  flex: 1;

  @media (max-width: 768px) {
    flex: none;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    justify-content: space-between;
  }
`;

const Select = styled.select`
  background: #2d2d2d;
  color: #ffffff;
  border: 1px solid #404040;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  min-width: 150px;

  &:focus {
    border-color: #646cff;
  }
`;

const EditButton = styled.button`
  background: transparent;
  color: #aaa;
  border: 1px solid #404040;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #404040;
    color: #ffffff;
    border-color: #4a4a4a;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MetricCard = styled.div`
  background: #2d2d2d;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #404040;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    border-color: #4a4a4a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const MetricLabel = styled.div`
  color: #aaa;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #4ade80;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

const ChartSection = styled.div`
  margin-top: 2rem;
`;

const ChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
`;

const ChartContainer = styled.div`
  background: #2d2d2d;
  border-radius: 12px;
  border: 1px solid #404040;
  padding: 1.5rem;
  flex: 1;
  min-height: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Sidebar = styled.div`
  width: 280px;
  padding: 2rem;
  border-left: 1px solid #404040;
  background: #2d2d2d;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const VariableItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  background: #404040;
  transition: all 0.2s;
  border: 1px solid transparent;

  &:hover {
    background: #4a4a4a;
    border-color: #4ade80;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    flex: 1;
    color: #ffffff;
    font-weight: 500;
  }

  input[type="checkbox"] {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 4px;
    border: 2px solid #aaa;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
    background: transparent;

    &:checked {
      background: #4ade80;
      border-color: #4ade80;
    }

    &:checked::after {
      content: "✓";
      position: absolute;
      color: #1a1a1a;
      font-size: 0.875rem;
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      border-color: #4ade80;
    }
  }
`;

function Dashboard() {
  const variables = useDashboardStore((s) => s.variables);
  const selectedVariableId = useDashboardStore((s) => s.selectedVariableId);
  const toggle = useDashboardStore((s) => s.toggleVariable);
  const setVars = useDashboardStore((s) => s.setVariables);
  const setSelectedVariable = useDashboardStore((s) => s.setSelectedVariable);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setVars([
      {
        id: "1",
        name: "Revenue",
        description: "Monthly revenue",
        active: true,
      },
      { id: "2", name: "Cost", description: "Operating costs", active: false },
      {
        id: "3",
        name: "Efficiency",
        description: "System efficiency",
        active: false,
      },
      {
        id: "4",
        name: "Utilization",
        description: "Station utilization",
        active: false,
      },
    ]);
    setSelectedVariable("1");
  }, [setVars, setSelectedVariable]);

  const metrics = [
    { label: "Revenue", value: "$45,231" },
    { label: "Cost", value: "$12,450" },
    { label: "Efficiency", value: "92%" },
    { label: "Utilization", value: "78%" },
  ];

  return (
    <Layout>
      <MainContent>
        <Header>
          <Title>Charging Station Dashboard</Title>
          <HeaderControls>
            <Select
              value={selectedVariableId || ""}
              onChange={(e) => setSelectedVariable(e.target.value)}
            >
              {variables.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </Select>
            <EditButton onClick={() => setIsOpen(true)}>
              Edit Variables
            </EditButton>
          </HeaderControls>
        </Header>

        <MetricsGrid>
          {metrics.map((metric) => (
            <MetricCard key={metric.label}>
              <MetricLabel>{metric.label}</MetricLabel>
              <MetricValue>{metric.value}</MetricValue>
            </MetricCard>
          ))}
        </MetricsGrid>

        <ChartSection>
          <ChartTitle>Monthly Revenue</ChartTitle>
          <ChartContainer>
            <Chart />
          </ChartContainer>
        </ChartSection>
      </MainContent>

      <Sidebar>{/* Sidebar content can be added here if needed */}</Sidebar>

      <SlideOver open={isOpen} onClose={() => setIsOpen(false)}>
        {variables.map((v) => (
          <VariableItem
            key={v.id}
            onMouseEnter={() => setHovered(v.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <label>
              <input
                type="checkbox"
                checked={v.active}
                onChange={() => toggle(v.id)}
              />
              {v.name}
            </label>
            {hovered === v.id && <TooltipCard content={v.description} />}
          </VariableItem>
        ))}
      </SlideOver>
    </Layout>
  );
}

export default Dashboard;
