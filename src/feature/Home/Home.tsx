import profileServices from "@/app/endpoints/profile.service";
import { theme } from "@/app/theme";
import Loading from "@/components/Loading/Loading";
import { StyledColoredText, StyledInput } from "@/components/shared";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isArticleLoading, setIsArticleLoading] = useState(false);
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const getArticles = async () => {
      setIsArticleLoading(true);
      const response = await profileServices.getArticles();
      setArticles(response.data);
      setIsArticleLoading(false);
    };

    getArticles();
  }, []);

  if (isArticleLoading) return <Loading />;

  return (
    <Row>
      <Col span={24}>
        {articles.length && articles.map((article: any, index: number) => (
          <Row
            style={{
              marginBottom: "20px",
              border: `1px solid ${theme.colors.gray[300]}`,
              borderRadius: "8px",
            }}
            align="middle"
            key={index}
          >
            <Col span={6}>
              <img
                width={"95%"}
                height={303}
                style={{
                  borderTopLeftRadius: "8px",
                }}
                loader={() => article.image}
                src={article.image}
                alt={`Preview`}
              />
            </Col>
            <Col
              span={18}
              style={{
                overflow: "auto",
                height: "270px",
                margin: "10px 0",
              }}
            >
              <Row>
                <Col span={24}>
                  <StyledColoredText
                    style={{
                      fontSize: theme.fontSize["2xl"],
                    }}
                    $color={theme.colors.indigo[600]}
                  >
                    {article.title}
                  </StyledColoredText>
                </Col>
                <Col span={24}>
                  <StyledColoredText $color={theme.colors.black}>
                    {article.bodyText}
                  </StyledColoredText>
                </Col>
              </Row>
            </Col>
            <Col span={6}></Col>
            <Col
              span={18}
              style={{
                marginBottom: "25px",
              }}
            >
              <StyledColoredText
                style={{
                  fontSize: theme.fontSize["2xl"],
                }}
                $color={theme.colors.indigo[600]}
              >
                Sources
              </StyledColoredText>
            </Col>
            <Col span={6}></Col>
            <Col
              span={18}
              style={{
                marginBottom: "25px",
              }}
            >
              <Row gutter={10}>
                {article.sources.map((data: string) => (
                  <Col key={data}>
                    <StyledInput value={data} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default HomePage;
