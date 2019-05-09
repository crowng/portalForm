import React, { Component } from 'react';
import styled from 'styled-components';
import  Portal  from './Portal';
import  Card  from './Card';
import { Transition, animated } from 'react-spring/renderprops';





export default class Modal extends Component {
    render() {
      const { children, toggle, on } = this.props;
      return (
        <Portal>
          <Transition
                    native
                    config={{
                      tension: 100,
                      friction: 15
                    }}
                    items={on}
                    from={{ opacity: 0, bgOpacity: 0, y: -50 }}
                    enter={{ opacity: 1, bgOpacity: 0.6, y: 0 }}
                    leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
                  >
          {on => on && ((styles) => (
            <ModalWrapper>
              <ModalCard styles={{ 
                transform: 
                styles.y.interpolate(y => `translate3d(0, ${y}, 0)`),
                ...styles }}>
                <div>{children}</div>
              </ModalCard>
              <Background  style={{ opacity: styles.bgOpacity.interpolate(bgOpacity => bgOpacity) }} onClick={toggle} />
            </ModalWrapper>
          ))}      
          </Transition>
        </Portal>
        
      );
    }
  }

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

// const CloseButton = styled.button`
//   border: none;
//   background: transparent;
//   padding: 10px;
//   ${absolute({
//     y: 'top',
//     x: 'right'
//   })};
// `;

const Background = styled(animated.div)`
position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;


