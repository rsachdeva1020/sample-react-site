import React from "react";

import { Card, Row, Col } from "antd";

export default function Users({ Data }) {
  const { Meta } = Card;

  return (
    <div>
      <div style={{ padding: "15px" }}>
        <Row gutter={[16, 24]}>
          {Data.map((ele) => {
            return (
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 6 }}
                key={ele.id}
                className="content"
              >
                <Card
                  hoverable
                  cover={
                    <img
                      alt="avatar"
                      src={`https://avatars.dicebear.com/v2/avataaars/${ele.username}.svg?options[mood][]=happy`}
                      style={{ backgroundColor: "#f5efefb5" }}
                    />
                  }
                >
                  <Meta title={ele.name} description="" />
                  <p style={{ margin: "6px 0 0 0" }}>{ele.email}</p>
                  <p style={{ margin: "4px 0 0 0" }}>{ele.phone}</p>
                  <p style={{ margin: "4px 0 0 0" }}>{ele.company.name}</p>
                  <p style={{ margin: "4px 0 0 0" }}>{ele.website}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
