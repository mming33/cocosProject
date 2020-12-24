System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class FloorManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "floorPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "Camera", _descriptor2, this);

          _initializerDefineProperty(this, "Player", _descriptor3, this);

          _defineProperty(this, "allFloors", []);

          _defineProperty(this, "type", "level");

          _defineProperty(this, "randomIndex", 0);

          _defineProperty(this, "lastNode", null);

          _defineProperty(this, "lastFloorType", (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
            error: Error()
          }), FloorType) : FloorType).FRONT);

          _defineProperty(this, "frontNumber", 0);

          _defineProperty(this, "movespeed", 5);

          _defineProperty(this, "moveSpeedx", 0);

          _defineProperty(this, "moveSpeedz", 0);

          _defineProperty(this, "nowFloorIndex", 0);

          _defineProperty(this, "cameraAngle", 0);
        }

        onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        }

        Init() {// this.CreateFloorForJson(this.data);
        }

        CreateFloor(FloorID) {
          for (let i = 0; i < this.floorPrefabs.length; i++) {
            const element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              let floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        }

        CreateFloorForJson(json) {
          // json = this.data;
          let node = this.node;

          for (let i = 0; i < json.floorData.length; i++) {
            const element = json.floorData[i];
            const id = Number(element) + 10000;
            let floorNode = this.CreateFloor(id);

            if (floorNode) {
              let type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
                this.lastNode = floorNode;
              } else {
                this.SetFloorNodePosition(type, floorNode);
              }

              node.addChild(floorNode);
            }
          }
        }

        CreateFloorForRandom() {
          // json = this.data;
          let node = this.node;
          let floorNode;
          let floor = {
            floorType: (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT
          };

          if (this.randomIndex <= 5) {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT;
          } else {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);

            if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                if (Math.random() < 0.5) floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;else floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
              } else {
                this.frontNumber++;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              }
            } else if (this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT || this.lastFloorType == (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT) {
              if (this.frontNumber >= 5 && Math.random() < 0.2) {
                this.frontNumber = 0;
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
              } else {
                this.frontNumber++;
                floor.floorType = this.lastFloorType;
              }
            }
          }

          if (floorNode) {
            let f = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);
            f.floorType = floor.floorType;
            this.lastFloorType = floor.floorType;

            if (this.randomIndex == 0) {
              floorNode.setWorldPosition(0, 0, 0);
              this.lastNode = floorNode;
            } else {
              this.SetFloorNodePosition(floor.floorType, floorNode);
            }

            node.addChild(floorNode);
            this.randomIndex++;
          }
        }

        SetFloorNodePosition(type, floorNode) {
          if (!this.lastNode) return;

          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z - 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z + 3);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x - 3, 0, this.lastNode.worldPosition.z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              floorNode.setWorldPosition(this.lastNode.worldPosition.x + 3, 0, this.lastNode.worldPosition.z);
              break;

            default:
              break;
          }

          this.lastNode = floorNode;
        }
        /**创建时根据json数据设置新地板的方向属性 */


        SetNewFloorTypeData(floorNode, json, i) {
          let floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        }

        RemoveFloor() {
          this.allFloors[0].node.destroy();
          this.allFloors.splice(0, 1);
        }

        onUpDate(dt) {
          this.MoveFloor(dt);
        }

        MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            if (this.type == "endlessMode") {
              if (this.nowFloorIndex == 5) this.RemoveFloor();else {
                this.nowFloorIndex++;
              } // if (this.nowFloorIndex > 2) {
              // this.nowFloorIndex = 2;
              // }

              this.CreateFloorForRandom();
            } else {
              this.nowFloorIndex++;
            } // if (this.nowFloorIndex == 1)
            // this.nowFloorIndex--;

          } //若下个结点存在 并且与当前结点的类型不同


          if (this.allFloors[this.nowFloorIndex] && this.allFloors[this.nowFloorIndex + 1]) {
            if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
              //应该转向
              if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
                switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).FRONT:
                    this.MoveFront();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).BACK:
                    this.MoveBack();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).LEFT:
                    this.MoveLeft();
                    break;

                  case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                    error: Error()
                  }), FloorType) : FloorType).RIGHT:
                    this.MoveRight();
                    break;

                  default:
                    this.MoveStop();
                    break;
                }
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          let out = new Vec3(0, 0, 0);
          let angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1); // console.log(angle);

          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (let i = 0; i < this.allFloors.length; i++) {
            const element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        }

        startMove() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        }

        MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        }

        MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        }

        MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        }

        MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        }

        MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        }

      }, _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkZST05UIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3IiLCJGbG9vcklEIiwiaSIsImZsb29yUHJlZmFicyIsImxlbmd0aCIsImVsZW1lbnQiLCJkYXRhIiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJDcmVhdGVGbG9vckZvckpzb24iLCJqc29uIiwiZmxvb3JEYXRhIiwiaWQiLCJOdW1iZXIiLCJmbG9vck5vZGUiLCJ0eXBlIiwiU2V0TmV3Rmxvb3JUeXBlRGF0YSIsInNldFdvcmxkUG9zaXRpb24iLCJsYXN0Tm9kZSIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJDcmVhdGVGbG9vckZvclJhbmRvbSIsImZsb29yVHlwZSIsInJhbmRvbUluZGV4IiwibGFzdEZsb29yVHlwZSIsImZyb250TnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsIkxFRlQiLCJSSUdIVCIsImYiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJCQUNLIiwiZmxvb3JEaXJlY3Rpb25EYXRhIiwiRXJyb3IiLCJMZXZlbDEiLCJSZW1vdmVGbG9vciIsImRlc3Ryb3kiLCJzcGxpY2UiLCJvblVwRGF0ZSIsImR0IiwiTW92ZUZsb29yIiwibm93Rmxvb3JJbmRleCIsIklzTm93Rmxvb3IiLCJkaXN0YW5jZSIsIk1vdmVGcm9udCIsIk1vdmVCYWNrIiwiTW92ZUxlZnQiLCJNb3ZlUmlnaHQiLCJNb3ZlU3RvcCIsImNhbWVyYUFuZ2xlIiwib3V0IiwiYW5nbGUiLCJDYW1lcmEiLCJnZXRXb3JsZFJvdGF0aW9uIiwiZ2V0RXVsZXJBbmdsZXMiLCJsZXJwIiwic2V0Um90YXRpb25Gcm9tRXVsZXIiLCJ5IiwiUGxheWVyIiwibW92ZVNwZWVkeCIsIm1vdmVzcGVlZCIsIm1vdmVTcGVlZHoiLCJzdGFydE1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDQSxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBdUNDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxVLE9BQUFBLFU7O0FBRS9GQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxLLFlBQUFBLEs7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7Ozs7T0FFSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7OEJBR2pCTSxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsVUFJSEMsUUFBUSxDQUFDUCxNQUFELEMsVUFFUk8sUUFBUSxDQUFDUixJQUFELEMsVUFFUlEsUUFBUSxDQUFDUixJQUFELEMsOENBUmIsTUFDYVMsWUFEYjtBQUFBO0FBQUEsc0NBQzhDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2Q0FVckIsRUFWcUI7O0FBQUEsd0NBWTNCLE9BWjJCOztBQUFBLCtDQWNwQixDQWRvQjs7QUFBQSw0Q0FnQmxCLElBaEJrQjs7QUFBQSxpREFrQjFCO0FBQUE7QUFBQSxzQ0FBVUMsS0FsQmdCOztBQUFBLCtDQW9CcEIsQ0FwQm9COztBQUFBLDZDQXNCdEIsQ0F0QnNCOztBQUFBLDhDQXdCckIsQ0F4QnFCOztBQUFBLDhDQTBCckIsQ0ExQnFCOztBQUFBLGlEQTRCbEIsQ0E1QmtCOztBQUFBLCtDQThCcEIsQ0E5Qm9CO0FB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Q1IsSUFBUixDQUFhd0IsZ0JBQWIsQ0FBOEJoQixPQUFPLENBQUNSLElBQVIsQ0FBYXNDLGFBQWIsQ0FBMkJDLENBQTNCLEdBQWdDLEtBQUs4QixVQUFMLEdBQWtCLEtBQUtDLFNBQXZCLEdBQW1DckIsRUFBakcsRUFBc0csQ0FBdEcsRUFBeUd6QyxPQUFPLENBQUNSLElBQVIsQ0FBYXNDLGFBQWIsQ0FBMkJFLENBQTNCLEdBQWdDLEtBQUsrQixVQUFMLEdBQWtCLEtBQUtELFNBQXZCLEdBQW1DckIsRUFBNUs7QUFDSDtBQUNKOztBQUNEdUIsUUFBQUEsU0FBUyxHQUFHO0FBQ1IsZUFBS0gsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFFRGpCLFFBQUFBLFNBQVMsR0FBRztBQUNSLGVBQUtlLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7O0FBQ0RoQixRQUFBQSxRQUFRLEdBQUc7QUFDUCxlQUFLYyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsZUFBS0UsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0g7O0FBQ0RmLFFBQUFBLFFBQVEsR0FBRztBQUNQLGVBQUthLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7O0FBQ0RkLFFBQUFBLFNBQVMsR0FBRztBQUNSLGVBQUtZLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRGIsUUFBQUEsUUFBUSxHQUFHO0FBQ1AsZUFBS1csVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUF2UnlDLE87Ozs7O2lCQUlqQixFOzs7Ozs7O2lCQUVILEk7Ozs7Ozs7aUJBRUEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENDQ2xhc3MsIGRpcmVjdG9yLCBFbnVtLCBpbnN0YW50aWF0ZSwgbWF0aCwgTm9kZSwgUHJlZmFiLCBRdWF0LCBTeXN0ZW0sIHN5c3RlbUV2ZW50LCB2MywgVmVjMywgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgREVCVUcsIEVESVRPUiB9IGZyb20gXCJjY2UuZW52XCI7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9vciB9IGZyb20gXCIuL0Rvb3JcIjtcbmltcG9ydCB7IERvb3JUeXBlIH0gZnJvbSBcIi4vRG9vclR5cGVcIjtcbmltcG9ydCB7IEZsb29yIH0gZnJvbSBcIi4vRmxvb3JcIjtcbmltcG9ydCB7IEZsb29yVHlwZSB9IGZyb20gXCIuL0Zsb29yVHlwZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRmxvb3JNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBGbG9vck1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgSTogRmxvb3JNYW5hZ2VyO1xuICAgIEBwcm9wZXJ0eShQcmVmYWIpXG4gICAgZmxvb3JQcmVmYWJzOiBQcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIENhbWVyYTogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIFBsYXllcjogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIC8qKuaJgOacieeahOWcsOadvyAqL1xuICAgIGFsbEZsb29yczogRmxvb3JbXSA9IFtdO1xuICAgIC8qKua4uOaIj+aooeW8jyAqL1xuICAgIHR5cGU6IHN0cmluZyA9IFwibGV2ZWxcIjtcbiAgICAvKirpmo/mnLrlnLDmnb/kuKrmlbDmqKHlvI8gKi9cbiAgICByYW5kb21JbmRleDogbnVtYmVyID0gMDtcbiAgICAvKirkuIrkuIDkuKrlnLDmnb8gKi9cbiAgICBsYXN0Tm9kZTogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIC8qKuS4iuS4gOS4quWcsOadvyDmlrnlkJHnsbvlnosqL1xuICAgIGxhc3RGbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgLyoq5ZCM5pa55ZCR57G75Z6L55qE5Zyw5p2/5Liq5pWwKi9cbiAgICBmcm9udE51bWJlcjogbnVtYmVyID0gMDtcbiAgICAvKirnp7vliqjpgJ/luqYqL1xuICAgIG1vdmVzcGVlZDogbnVtYmVyID0gNTtcbiAgICAvKip45pa55ZCRKi9cbiAgICBtb3ZlU3BlZWR4OiBudW1iZXIgPSAwO1xuICAgIC8qKnrmlrnlkJEqL1xuICAgIG1vdmVTcGVlZHo6IG51bWJlciA9IDA7XG4gICAgLyoq5b2T5YmN5Zyw5p2/57Si5byVKi9cbiAgICBub3dGbG9vckluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8qKuaRhOWDj+acuuinkuW6piovXG4gICAgY2FtZXJhQW5nbGU6IG51bWJlciA9IDA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEZsb29yTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChGbG9vck1hbmFnZXIpIGFzIEZsb29yTWFuYWdlcjtcbiAgICB9XG4gICAgSW5pdCgpIHtcblxuICAgICAgICAvLyB0aGlzLkNyZWF0ZUZsb29yRm9ySnNvbih0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIENyZWF0ZUZsb29yKEZsb29ySUQ6IG51bWJlcik6IE5vZGUgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsb29yUHJlZmFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9ICh0aGlzLmZsb29yUHJlZmFic1tpXS5kYXRhIGFzIE5vZGUpLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3I7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5JRCA9PSBGbG9vcklEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZsb29yID0gaW5zdGFudGlhdGUodGhpcy5mbG9vclByZWZhYnNbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsRmxvb3JzLnB1c2goZmxvb3IuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsb29yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliJvlu7rlnLDmnb/lpLHotKUs5LiN5a2Y5ZyoSUTkuLo6XCIsIEZsb29ySUQsIFwi55qE5Zyw5p2/LOivt+ajgOafpeWQjumHjeivlSFcIik7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIENyZWF0ZUZsb29yRm9ySnNvbihqc29uOiBhbnkpIHtcbiAgICAgICAgLy8ganNvbiA9IHRoaXMuZGF0YTtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5mbG9vckRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqc29uLmZsb29yRGF0YVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGVsZW1lbnQpICsgMTAwMDA7XG4gICAgICAgICAgICBsZXQgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBpZiAoZmxvb3JOb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLlNldE5ld0Zsb29yVHlwZURhdGEoZmxvb3JOb2RlLCBqc29uLCBpKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gZmxvb3JOb2RlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0Rmxvb3JOb2RlUG9zaXRpb24odHlwZSwgZmxvb3JOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChmbG9vck5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVGbG9vckZvclJhbmRvbSgpIHtcbiAgICAgICAgLy8ganNvbiA9IHRoaXMuZGF0YTtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxldCBmbG9vck5vZGU7XG4gICAgICAgIGxldCBmbG9vciA9IHsgZmxvb3JUeXBlOiBGbG9vclR5cGUuRlJPTlQgfTtcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tSW5kZXggPD0gNSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoMSkgKyAxMDAwMDtcbiAgICAgICAgICAgIGZsb29yTm9kZSA9IHRoaXMuQ3JlYXRlRmxvb3IoaWQpO1xuICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoMSkgKyAxMDAwMDtcbiAgICAgICAgICAgIGZsb29yTm9kZSA9IHRoaXMuQ3JlYXRlRmxvb3IoaWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMubGFzdEZsb29yVHlwZSA9PSBGbG9vclR5cGUuRlJPTlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcm9udE51bWJlciA+PSA1ICYmIE1hdGgucmFuZG9tKCkgPCAwLjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9udE51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkxFRlQ7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5SSUdIVDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb250TnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdEZsb29yVHlwZSA9PSBGbG9vclR5cGUuTEVGVCB8fCB0aGlzLmxhc3RGbG9vclR5cGUgPT0gRmxvb3JUeXBlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJvbnROdW1iZXIgPj0gNSAmJiBNYXRoLnJhbmRvbSgpIDwgMC4yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbnROdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuRlJPTlQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9udE51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSB0aGlzLmxhc3RGbG9vclR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZsb29yTm9kZSkge1xuICAgICAgICAgICAgbGV0IGYgPSBmbG9vck5vZGUuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgICAgIGYuZmxvb3JUeXBlID0gZmxvb3IuZmxvb3JUeXBlO1xuICAgICAgICAgICAgdGhpcy5sYXN0Rmxvb3JUeXBlID0gZmxvb3IuZmxvb3JUeXBlO1xuICAgICAgICAgICAgaWYgKHRoaXMucmFuZG9tSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBmbG9vck5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0Rmxvb3JOb2RlUG9zaXRpb24oZmxvb3IuZmxvb3JUeXBlLCBmbG9vck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChmbG9vck5vZGUpO1xuICAgICAgICAgICAgdGhpcy5yYW5kb21JbmRleCsrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIFNldEZsb29yTm9kZVBvc2l0aW9uKHR5cGU6IEZsb29yVHlwZSwgZmxvb3JOb2RlOiBOb2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5sYXN0Tm9kZSkgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi54LCAwLCB0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueiAtIDMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuQkFDSzpcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueCwgMCwgdGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnogKyAzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24odGhpcy5sYXN0Tm9kZS53b3JsZFBvc2l0aW9uLnggLSAzLCAwLCB0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLmxhc3ROb2RlLndvcmxkUG9zaXRpb24ueCArIDMsIDAsIHRoaXMubGFzdE5vZGUud29ybGRQb3NpdGlvbi56KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IGZsb29yTm9kZTtcbiAgICB9XG5cbiAgICAvKirliJvlu7rml7bmoLnmja5qc29u5pWw5o2u6K6+572u5paw5Zyw5p2/55qE5pa55ZCR5bGe5oCnICovXG4gICAgcHJpdmF0ZSBTZXROZXdGbG9vclR5cGVEYXRhKGZsb29yTm9kZTogTm9kZSwganNvbjogYW55LCBpOiBudW1iZXIpOiBGbG9vclR5cGUge1xuICAgICAgICBsZXQgZmxvb3IgPSBmbG9vck5vZGUuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcjtcbiAgICAgICAgaWYgKGZsb29yKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGpzb24uZmxvb3JEaXJlY3Rpb25EYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5CQUNLO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkxFRlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuUklHSFQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOexu+WeizpcIiArIGpzb24uTGV2ZWwxLmZsb29yRGlyZWN0aW9uRGF0YVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbG9vci5mbG9vclR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw57G75Z6LOlwiICsganNvbi5MZXZlbDEuZmxvb3JEaXJlY3Rpb25EYXRhW2ldKVxuICAgIH1cblxuICAgIFJlbW92ZUZsb29yKCkge1xuICAgICAgICB0aGlzLmFsbEZsb29yc1swXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5hbGxGbG9vcnMuc3BsaWNlKDAsIDEpO1xuICAgIH1cblxuICAgIG9uVXBEYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5Nb3ZlRmxvb3IoZHQpO1xuICAgIH1cblxuXG5cbiAgICBNb3ZlRmxvb3IoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0pIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLklzTm93Rmxvb3IoKSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZW5kbGVzc01vZGVcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0Zsb29ySW5kZXggPT0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW1vdmVGbG9vcigpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd0Zsb29ySW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMubm93Rmxvb3JJbmRleCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vd0Zsb29ySW5kZXggPSAyO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLkNyZWF0ZUZsb29yRm9yUmFuZG9tKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm93Rmxvb3JJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm93Rmxvb3JJbmRleCA9PSAxKVxuXG4gICAgICAgICAgICAvLyB0aGlzLm5vd0Zsb29ySW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICAvL+iLpeS4i+S4que7k+eCueWtmOWcqCDlubbkuJTkuI7lvZPliY3nu5PngrnnmoTnsbvlnovkuI3lkIxcbiAgICAgICAgaWYgKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0gJiYgdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vd0Zsb29ySW5kZXggKyAxIDwgdGhpcy5hbGxGbG9vcnMubGVuZ3RoICYmIHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSAhPSB0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXhdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgIC8v5bqU6K+l6L2s5ZCRXG4gICAgICAgICAgICAgICAgaWYgKFZlYzMuZGlzdGFuY2UodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XS5ub2RlLndvcmxkUG9zaXRpb24sIG5ldyBWZWMzKDAsIDAsIDApKSA8IDAuMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleCArIDFdLmZsb29yVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuRlJPTlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlRnJvbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVTdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+i9rOaRhOWDj+WktFxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXS5mbG9vclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAxODA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSA5MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAtOTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG91dCA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBsZXQgYW5nbGUgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5DYW1lcmE/LmdldFdvcmxkUm90YXRpb24oKS5nZXRFdWxlckFuZ2xlcyhhbmdsZSlcbiAgICAgICAgVmVjMy5sZXJwKG91dCwgYW5nbGUsIG5ldyBWZWMzKDAsIHRoaXMuY2FtZXJhQW5nbGUsIDApLCAwLjEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5DYW1lcmE/LnNldFJvdGF0aW9uRnJvbUV1bGVyKG91dC54LCBvdXQueSwgb3V0LnopO1xuICAgICAgICB0aGlzLlBsYXllcj8uc2V0Um90YXRpb25Gcm9tRXVsZXIob3V0LngsIG91dC55LCBvdXQueik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxGbG9vcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmFsbEZsb29yc1tpXTtcbiAgICAgICAgICAgIGVsZW1lbnQubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVsZW1lbnQubm9kZS53b3JsZFBvc2l0aW9uLnggKyAodGhpcy5tb3ZlU3BlZWR4ICogdGhpcy5tb3Zlc3BlZWQgKiBkdCksIDAsIGVsZW1lbnQubm9kZS53b3JsZFBvc2l0aW9uLnogKyAodGhpcy5tb3ZlU3BlZWR6ICogdGhpcy5tb3Zlc3BlZWQgKiBkdCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0TW92ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR6ID0gMTtcbiAgICB9XG5cbiAgICBNb3ZlRnJvbnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDE7XG4gICAgfVxuICAgIE1vdmVCYWNrKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAtMTtcbiAgICB9XG4gICAgTW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gLTE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVTdG9wKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAwO1xuICAgIH1cbn0iXX0=