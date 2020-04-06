import React, { useState } from 'react';
import { Button, Card, Descriptions, Input } from 'antd';
import styles from './utils.css';

interface OptimalCalculationResult {
  str: number;
  agi: number;
  ene: number;
}

function Utils() {
  const [pointsToAdd, setPointsToAdd] = useState<number>();
  const [calcResult, setCalcResult] = useState<OptimalCalculationResult>();

  const updatePointsToAdd = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (Number.isNaN(Number(value))) {
      return;
    }
    setPointsToAdd(value);
  };

  const calculateOptimalPoints = () => {
    if (!pointsToAdd) {
      return;
    }
    const agiResult = Math.floor(pointsToAdd * 0.35);
    const leftoverPoints = pointsToAdd - agiResult;
    let currentMaxDmg = 0;
    let strResult = 0;
    let eneResult = 0;
    for (
      let str = 1, ene = leftoverPoints - 1;
      str < leftoverPoints;
      str++, ene--
    ) {
      const dmg = ((str / 4 + str / 6) / 2) * (2 + ene / 1000);
      if (dmg > currentMaxDmg) {
        currentMaxDmg = dmg;
        strResult = str;
        eneResult = ene;
      }
    }
    setCalcResult({ str: strResult, agi: agiResult, ene: eneResult });
  };

  return (
    <div className={styles.container}>
      <h1>Utils</h1>
      <Card
        title="BK Optimal points"
        bordered={false}
        size="small"
        actions={[
          <Button
            key="lul"
            type="primary"
            onClick={() => calculateOptimalPoints()}
          >
            Calculate
          </Button>
        ]}
      >
        <Input
          placeholder="Points to add"
          value={pointsToAdd}
          onChange={updatePointsToAdd}
        />
        {calcResult && (
          <Descriptions title="Results" size="small" column={1}>
            <Descriptions.Item label="STR">{calcResult.str}</Descriptions.Item>
            <Descriptions.Item label="AGI">{calcResult.agi}</Descriptions.Item>
            <Descriptions.Item label="ENE">{calcResult.ene}</Descriptions.Item>
          </Descriptions>
        )}
      </Card>
    </div>
  );
}

export default Utils;
